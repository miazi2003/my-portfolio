import express from "express";
import { getCollection, toObjectId } from "../db.js";
import { verifyJWT, verifyAdmin } from "../middleware/auth.js";

const router = express.Router();
const adminOnly = [verifyJWT, verifyAdmin];

router.get("/", async (req, res) => {
  const skills = await getCollection("skills");
  const items = await skills.find({}).sort({ order: 1, createdAt: -1 }).toArray();
  res.json(items);
});

router.get("/admin", adminOnly, async (req, res) => {
  const skills = await getCollection("skills");
  const items = await skills.find({}).sort({ order: 1, createdAt: -1 }).toArray();
  res.json(items);
});

router.patch("/reorder/list", adminOnly, async (req, res) => {
  const { items } = req.body;

  if (!Array.isArray(items)) {
    return res.status(400).json({ message: "items must be an array" });
  }

  const operations = items
    .map((item) => ({ _id: toObjectId(item._id), order: Number(item.order) }))
    .filter((item) => item._id && Number.isFinite(item.order))
    .map((item) => ({
      updateOne: {
        filter: { _id: item._id },
        update: { $set: { order: item.order, updatedAt: new Date() } },
      },
    }));

  if (!operations.length) return res.json({ modifiedCount: 0 });

  const skills = await getCollection("skills");
  const result = await skills.bulkWrite(operations);
  res.json({ modifiedCount: result.modifiedCount });
});

router.post("/", adminOnly, async (req, res) => {
  const skills = await getCollection("skills");
  const lastSkill = await skills.find().sort({ order: -1 }).limit(1).next();
  const now = new Date();
  const doc = {
    ...req.body,
    order: req.body.order ?? ((lastSkill?.order || 0) + 1),
    createdAt: now,
    updatedAt: now,
  };

  const result = await skills.insertOne(doc);
  const created = await skills.findOne({ _id: result.insertedId });
  res.status(201).json(created);
});

router.patch("/:id", adminOnly, async (req, res) => {
  const _id = toObjectId(req.params.id);
  if (!_id) return res.status(400).json({ message: "Invalid id" });

  const updates = { ...req.body, updatedAt: new Date() };
  delete updates._id;

  const skills = await getCollection("skills");
  await skills.updateOne({ _id }, { $set: updates });
  const updated = await skills.findOne({ _id });

  if (!updated) return res.status(404).json({ message: "Not found" });
  res.json(updated);
});

router.delete("/:id", adminOnly, async (req, res) => {
  const _id = toObjectId(req.params.id);
  if (!_id) return res.status(400).json({ message: "Invalid id" });

  const skills = await getCollection("skills");
  const result = await skills.deleteOne({ _id });

  if (!result.deletedCount) return res.status(404).json({ message: "Not found" });
  res.json({ deleted: true });
});

export default router;
