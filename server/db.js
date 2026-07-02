import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME || "yeasin_portfolio";

if (!uri) {
  throw new Error("MONGODB_URI is required");
}

const client = new MongoClient(uri);
let db;

export const connectDB = async () => {
  if (db) return db;

  await client.connect();
  db = client.db(dbName);

  await db.collection("admins").createIndex({ email: 1 }, { unique: true });
  await db.collection("skills").createIndex({ order: 1 });
  await db.collection("projects").createIndex({ featured: 1 });
  await db.collection("blogs").createIndex({ published: 1 });

  return db;
};

export const getCollection = async (name) => {
  const database = await connectDB();
  return database.collection(name);
};

export const toObjectId = (id) => {
  if (!ObjectId.isValid(id)) return null;
  return new ObjectId(id);
};
