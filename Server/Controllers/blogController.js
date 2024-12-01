import Blog from "../Models/blogModel.js"

export const createBlog = async(req,res)=>{
    const data = req.body
    if(!data.title || !data.coverImg || !data.description || !data.author || !data.authorDetails){
        return res.status(400).json({success:false,message:'please provide all field'})
    }

    try {
       const blog = await Blog.create(data)
       res.status(201).json({success:true,data:blog})
    } catch (error) {
        console.log('Error in create blog section',error)
        res.status(500).json({success:false,message:'Server Error'})
    }
}