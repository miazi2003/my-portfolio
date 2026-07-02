import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getCollection } from "../db.js";
import { verifyJWT, verifyAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const admins = await getCollection("admins");
  const admin = await admins.findOne({ email: email.toLowerCase(), role: "admin" });

  if (!admin) return res.status(401).json({ message: "Invalid credentials" });

  const passwordMatches = await bcrypt.compare(password, admin.password);
  if (!passwordMatches) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: admin._id.toString(), email: admin.email, role: admin.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
  );

  res.json({
    token,
    user: {
      id: admin._id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
    },
  });
});

router.get("/me", verifyJWT, verifyAdmin, (req, res) => {
  res.json({
    id: req.admin._id,
    email: req.admin.email,
    name: req.admin.name,
    role: req.admin.role,
  });
});

export default router;
