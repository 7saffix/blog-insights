import express from "express";
import { createBlog } from "../Controllers/blogController.js";

const blogRouter  = express.Router()

blogRouter.post('/post-blog',createBlog)  //create a blog

export default blogRouter