// import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs,setBlogs] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await axios.get("/api/blogs");
          console.log(response.data); 
          setBlogs(response.data.data || response.data); 
        } catch (error) {
          console.error("Error fetching blogs:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBlogs();
    }, []);
  
    
    if (loading) {
      return <h1>Loading...</h1>;
    }
  
    if (!Array.isArray(blogs) || blogs.length === 0) {
      return <h1>No data available</h1>;
    }
    return (       
        <div>
            <div className="sm:m-10 flex justify-center">
                <div className="text-center">
                    <p className='text-[#0096C7] font-bold'>Our blogs</p>
                    <h2 className="text-4xl">Recent <span className='text-[#0096C7]'>Articles & News</span></h2>
                    <p className='sm:w-[600px] text-lg'>Our blog is your go-to resource for staying updated on the latest trends, best practices, and actionable advice
                    </p>
                </div>
            </div>
            
            <div  className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {
              blogs.map((blog,i)=>( 
                <div key={i}>
                  <div className="card card-compact bg-base-100 shadow-md">
          
                    <figure>
                      <img
                        src={blog.coverImg}
                        alt="img" className='w-full h-48 object-cover' />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{blog.title}</h2>
                      <p>{blog.author}</p>
                      <p>{blog.authorDetails}</p>
                    </div>
                  </div>
                </div>
              ))
            }
            </div>
            
        </div>
    );
};

export default Blogs;