import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import authRouter from "./routes/auth.js";
import skillsRouter from "./routes/skills.js";
import {
  blogsRouter,
  educationRouter,
  experienceRouter,
  messagesRouter,
  projectsRouter,
  statsRouter,
} from "./routes/content.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL?.split(",") || ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.json({ message: "Portfolio API is running" });
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.use("/api/auth", authRouter);
app.use("/api/skills", skillsRouter);
app.use("/api/education", educationRouter);
app.use("/api/experience", experienceRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/blogs", blogsRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/stats", statsRouter);

app.use((err, req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "Server error" });
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Portfolio API listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  });
