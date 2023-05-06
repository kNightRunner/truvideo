import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/users";
import { jwtOptions } from "../config/passport";
import bcrypt from "bcrypt";

export async function loginUser(req: Request, res: Response) {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const token = jwt.sign({ id: user._id }, jwtOptions.secretOrKey as string, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
