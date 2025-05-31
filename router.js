import { Router } from "express";
import PostController from "./post-controller.js";

const router = new Router();

router.post("/posts", PostController.create);
router.get("/posts", async () => {});
router.get("/posts/:id", async () => {});
router.put("/posts", async () => {});
router.delete("/posts", async () => {});

export default router;
