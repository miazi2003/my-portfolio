import jwt from "jsonwebtoken";
import { getCollection, toObjectId } from "../db.js";

export const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

export const verifyAdmin = async (req, res, next) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Forbidden" });
  }

  const adminId = toObjectId(req.user.id);
  if (!adminId) return res.status(403).json({ message: "Forbidden" });

  const admins = await getCollection("admins");
  const admin = await admins.findOne(
    { _id: adminId, role: "admin" },
    { projection: { password: 0 } }
  );

  if (!admin) return res.status(403).json({ message: "Forbidden" });

  req.admin = admin;
  next();
};
