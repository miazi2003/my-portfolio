import express from "express";
import { getCollection, toObjectId } from "../db.js";
import { verifyJWT, verifyAdmin } from "../middleware/auth.js";

const adminOnly = [verifyJWT, verifyAdmin];

export const createCrudRouter = (collectionName, options = {}) => {
  const router = express.Router();
  const {
    publicFilter = {},
    publicSort = { createdAt: -1 },
    adminSort = { createdAt: -1 },
    beforeInsert,
    beforeUpdate,
  } = options;

  router.get("/", async (req, res) => {
    const collection = await getCollection(collectionName);
    const items = await collection.find(publicFilter).sort(publicSort).toArray();
    res.json(items);
  });

  router.get("/admin", adminOnly, async (req, res) => {
    const collection = await getCollection(collectionName);
    const items = await collection.find({}).sort(adminSort).toArray();
    res.json(items);
  });

  router.get("/:id", async (req, res) => {
    const _id = toObjectId(req.params.id);
    const query = _id
      ? { _id }
      : { $or: [{ slug: req.params.id }, { id: req.params.id }] };

    const collection = await getCollection(collectionName);
    const item = await collection.findOne(query);
    if (!item) return res.status(404).json({ message: "Not found" });

    res.json(item);
  });

  router.post("/", adminOnly, async (req, res) => {
    const collection = await getCollection(collectionName);
    const now = new Date();
    const doc = {
      ...req.body,
      createdAt: now,
      updatedAt: now,
    };

    const payload = beforeInsert ? await beforeInsert(doc, collection) : doc;
    const result = await collection.insertOne(payload);
    const created = await collection.findOne({ _id: result.insertedId });

    res.status(201).json(created);
  });

  router.patch("/:id", adminOnly, async (req, res) => {
    const _id = toObjectId(req.params.id);
    if (!_id) return res.status(400).json({ message: "Invalid id" });

    const collection = await getCollection(collectionName);
    const updates = {
      ...req.body,
      updatedAt: new Date(),
    };
    delete updates._id;

    const payload = beforeUpdate ? await beforeUpdate(updates, collection, _id) : updates;
    await collection.updateOne({ _id }, { $set: payload });
    const updated = await collection.findOne({ _id });

    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  });

  router.delete("/:id", adminOnly, async (req, res) => {
    const _id = toObjectId(req.params.id);
    if (!_id) return res.status(400).json({ message: "Invalid id" });

    const collection = await getCollection(collectionName);
    const result = await collection.deleteOne({ _id });

    if (!result.deletedCount) return res.status(404).json({ message: "Not found" });
    res.json({ deleted: true });
  });

  return router;
};
