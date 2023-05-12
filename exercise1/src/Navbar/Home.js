import React from 'react'
import { useState } from 'react';

 function Home() {
  
    const [blogs, setBlogs]=useState([
        {title:"Book 1", author: "author 1", body:"body 1", id:1},
        {title:"Book 2", author: "author 2", body:"body 2", id:2},
        {title:"Book 3", author: "author 3", body:"body 3", id:3}
    ]);

    return (
    <div className='home'>
        <h2>Homepage</h2>
        <div className='home'>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>by {blog.author}</p>
                </div>
            )
            )}
        </div>
    </div>
  )
}

export default Home