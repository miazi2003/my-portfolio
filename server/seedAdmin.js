import "dotenv/config";
import bcrypt from "bcryptjs";
import { getCollection } from "./db.js";

const email = process.env.ADMIN_EMAIL?.toLowerCase();
const password = process.env.ADMIN_PASSWORD;
const name = process.env.ADMIN_NAME || "Yeasin Miazi";

if (!email || !password) {
  console.error("ADMIN_EMAIL and ADMIN_PASSWORD are required");
  process.exit(1);
}

const admins = await getCollection("admins");
const existing = await admins.findOne({ email });

if (existing) {
  console.log(`Admin already exists: ${email}`);
  process.exit(0);
}

const hashedPassword = await bcrypt.hash(password, 12);
await admins.insertOne({
  name,
  email,
  password: hashedPassword,
  role: "admin",
  createdAt: new Date(),
  updatedAt: new Date(),
});

console.log(`Admin created: ${email}`);
process.exit(0);
