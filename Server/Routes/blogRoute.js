import express from "express";
import { createBlog, deleteBlog, getBlog, updateBlog } from "../Controllers/blogController.js";

const blogRouter  = express.Router()

blogRouter.post('/post-blog',createBlog)  //create a blog
blogRouter.get('/blogs',getBlog)  //read blogs
blogRouter.put('/update-blog/:id',updateBlog)  //update a blog
blogRouter.delete('/delete-blog/:id',deleteBlog)  //delete a blog

export default blogRouter