import { Router } from "express";
import User from "../models/user";

const router = Router();

// ---------------------------
// REGISTER
// ---------------------------
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Create new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: { name, email, role: newUser.role },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
});

// ---------------------------
// LOGIN
// ---------------------------
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check password (for now, plain text comparison; later use hashing)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Return success + token (fake token for now)
    res.status(200).json({
      message: "Login successful",
      token: "fake-jwt-token",
      user: { name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
});

export default router;
