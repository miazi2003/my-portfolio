import express from "express";
import { getCollection, toObjectId } from "../db.js";
import { verifyJWT, verifyAdmin } from "../middleware/auth.js";
import { createCrudRouter } from "../utils/crudRouter.js";

export const educationRouter = createCrudRouter("education", {
  publicSort: { startYear: -1, createdAt: -1 },
});

export const experienceRouter = createCrudRouter("experience", {
  publicSort: { order: 1, createdAt: -1 },
});

export const projectsRouter = createCrudRouter("projects", {
  publicSort: { featured: -1, order: 1, createdAt: -1 },
});

export const blogsRouter = createCrudRouter("blogs", {
  publicFilter: { published: true },
  publicSort: { date: -1, createdAt: -1 },
});

export const messagesRouter = express.Router();
const adminOnly = [verifyJWT, verifyAdmin];

messagesRouter.post("/", async (req, res) => {
  const { name, email, title, message } = req.body;

  if (!name || !email || !title || !message) {
    return res.status(400).json({ message: "All contact fields are required" });
  }

  const messages = await getCollection("messages");
  const now = new Date();
  const doc = {
    name,
    email,
    title,
    message,
    read: false,
    createdAt: now,
    updatedAt: now,
  };

  const result = await messages.insertOne(doc);
  const created = await messages.findOne({ _id: result.insertedId });
  res.status(201).json(created);
});

messagesRouter.get("/", adminOnly, async (req, res) => {
  const messages = await getCollection("messages");
  const items = await messages.find({}).sort({ createdAt: -1 }).toArray();
  res.json(items);
});

messagesRouter.delete("/:id", adminOnly, async (req, res) => {
  const _id = toObjectId(req.params.id);
  if (!_id) return res.status(400).json({ message: "Invalid id" });

  const messages = await getCollection("messages");
  const result = await messages.deleteOne({ _id });

  if (!result.deletedCount) return res.status(404).json({ message: "Not found" });
  res.json({ deleted: true });
});

export const statsRouter = express.Router();

statsRouter.get("/", adminOnly, async (req, res) => {
  const [projects, blogs, messages, skills] = await Promise.all([
    getCollection("projects"),
    getCollection("blogs"),
    getCollection("messages"),
    getCollection("skills"),
  ]);

  const [totalProjects, totalBlogs, totalMessages, totalSkills] = await Promise.all([
    projects.countDocuments(),
    blogs.countDocuments(),
    messages.countDocuments(),
    skills.countDocuments(),
  ]);

  res.json({ totalProjects, totalBlogs, totalMessages, totalSkills });
});
