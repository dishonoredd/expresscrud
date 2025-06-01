import { Router } from "express";
import PostController from "./post-controller.js";

const router = new Router();

const url = "/posts";

router.post(url, PostController.create);
router.get(url, PostController.getAll);
router.get(`${url}/:id`, PostController.getOne);
router.put(url, PostController.update);
router.delete(`${url}/:id`, PostController.delete);

export default router;
