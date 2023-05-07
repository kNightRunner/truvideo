import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", authRoutes);

app.use(authRoutes);
app.use(errorHandler);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

async function startServer() {
  const mongoUri =
    process.env.MONGODB_URI || "mongodb://localhost:27017/truvideo";
  console.log("MongoDB URI:", mongoUri);

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

startServer();
