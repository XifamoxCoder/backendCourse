import Post from "./Post.js";
import fileService from "./fileService.js";

class PostService {
  async create(post, picture) {
    const fileName = fileService.saveFile(picture);
    return await Post.create({...post, picture: fileName});
  }

  async getAll() {
    return await Post.find()
  }
  async getOne(id) {
    if (!id) {
      throw new Error("id is not provided");
    }
    return await Post.findById(id)
  }
  async update(post) {
      if(!post._id) {
        throw new Error("id is not provided");
      }
    return await Post.findByIdAndUpdate(post._id, post, {new: true})
  }
  async delete(id) {
      if(!id) {
        throw new Error("id is not provided");
      }
    const post = await Post.findById(id);
    if (!post) {
      throw new Error("Post not found");
    }

    // Удаление файла
    fileService.deleteFile(post.picture);
    return await Post.findByIdAndDelete(id)
  }
}

export default new PostService()