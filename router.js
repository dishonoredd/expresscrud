import { Router } from "express";
import Post from "./db/post.js";

const router = new Router();

router.post("/posts", async (req, res) => {
  try {
    const { author, title, content, picture } = req.body;
    const post = await Post.create({ author, title, content, picture });
    res.json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/posts", async () => {});
router.get("/posts/:id", async () => {});
router.put("/posts", async () => {});
router.delete("/posts", async () => {});

export default router;
