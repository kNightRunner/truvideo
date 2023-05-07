// Purpose: Seed the database with some dummy data for testing purposes

import User, { IUser } from "../src/models/users";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();
const MONGO_URI = process.env.MONGODB_URI ?? "mongodb://localhost:27017/truvideo";

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

async function seedDatabase() {
  const hashedPassword = await hashPassword(process.env.HASHED_PASSWORD ?? "defaultPassword");


  const users: IUser[] = [
    new User({
      firstName: "Leonel",
      lastName: "Messi",
      address: "123 Rosario St",
      profileImage: "aaa/aa.jpg",
      username: "leomessi",
      password: hashedPassword,
    }),
  ];

  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
    await User.deleteMany({});
    await User.insertMany(users);
    console.log("Database seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();


