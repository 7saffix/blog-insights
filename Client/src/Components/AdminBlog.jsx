// import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";

const AdminBlog = () => {
    const [adminBlogs,setAdminBlogs] = useState([])
    // const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const fetchBlogs = async () => {
            try {
              const response = await axios.get("/api/blogs");
              console.log(response.data); 
              setAdminBlogs(response.data.data || response.data); 
            } catch (error) {
              console.error("Error fetching admin blogs:", error);
            } 
            //  finally {
            //   setLoading(false);
            // }
          };
      
          fetchBlogs();
    },[])
    return (
        <>
            <button
            title="Add New"
            className="btn btn-outline flex items-center group cursor-pointer outline-none"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="40px"
                viewBox="0 0 24 24"
                className="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
            >
                <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                strokeWidth="1.5"
                />
                <path d="M8 12H16" strokeWidth="1.5" />
                <path d="M12 16V8" strokeWidth="1.5" />
            </svg>
            <span className="text-2xl font-bold">Add new blog</span>
            </button>

            {/* table */}

            <div className="overflow-x-auto mt-4">
                <table className="table">
                    {/* head */}
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>

                        <tbody>
                        {/* row 1 */}
                        {
                            adminBlogs.map((adminBlog,i)=>(
                                <tr key={i}>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                    src={adminBlog.coverImg}
                                    alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">{adminBlog.author}</div>
                                <div className="text-sm opacity-50">{adminBlog.authorDetails}</div>
                                </div>
                            </div>
                            </td>
                            <td>
                           {adminBlog.title}
                            <br />
                            </td>
                           
                            <th>
                            <button className="hover:underline">Edit</button>
                            </th>
                            <th>
                            <button className="hover:underline">Delete</button>
                            </th>
                                </tr>
                            ))
                        }
                    
                        </tbody>
                    
                </table>
            </div>
      </>
      
    );
};

export default AdminBlog;
