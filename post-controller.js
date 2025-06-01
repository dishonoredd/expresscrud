import Post from "./db/post.js";

class PostController {
  async create(req, res) {
    try {
      const { author, title, content, picture } = req.body;
      const post = await Post.create({ author, title, content, picture });
      res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async getAll(req, res) {
    try {
      const posts = await Post.find({});
      return res.json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "Id is not defined" });
      }
      const post = await Post.findById(id);
      return res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async update(req, res) {
    try {
      const post = req.body;
      if (!post._id) {
        res.status(400).json({ message: "Id is not defined" });
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
        new: true,
      });
      return res.json(updatedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "Id is not defined" });
      }
      const post = await Post.findByIdAndDelete(id);
      res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new PostController();
