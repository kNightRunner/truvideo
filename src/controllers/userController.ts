import { Request, Response } from "express";
import User, { IUser } from "../models/users";

export async function createUser(req: Request, res: Response) {
  try {
    const newUser: IUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      profileImage: req.file ? `uploads/${req.file.filename}` : "",
      username: req.body.username,
      password: req.body.password,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateUser(req: Request, res: Response) {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    if (req.body.firstName) {
      user.firstName = req.body.firstName;
    }

    if (req.body.lastName) {
      user.lastName = req.body.lastName;
    }

    if (req.body.address) {
      user.address = req.body.address;
    }

    if (req.file) {
      user.profileImage = `uploads/${req.file.filename}`;
    }

    await user.save();
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
