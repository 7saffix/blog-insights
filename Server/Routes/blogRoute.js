import express from "express";
import { createBlog, deleteBlog } from "../Controllers/blogController.js";

const blogRouter  = express.Router()

blogRouter.post('/post-blog',createBlog)  //create a blog
blogRouter.delete('/delete-blog/:id',deleteBlog)  //delete a blog

export default blogRouter