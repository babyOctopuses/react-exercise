import React from 'react'
import { useState } from 'react';
import BlogList from '../BlogList';

 function Home() {
  
    const [blogs, setBlogs]=useState([
        {title:"Book 1", author: "yoshi", body:"body 1", id:1},
        {title:"Book 2", author: "mario", body:"body 2", id:2},
        {title:"Book 3", author: "mario", body:"body 3", id:3}
    ]);

    return (
    <div className='home'>
        <h2>Homepage</h2>
        <BlogList blogs={blogs} title="All Titles"/>
        <BlogList blogs={blogs.filter((blog)=>blog.author === "mario")} title="Mario's list"/>
    </div>
  )
}

export default Home