import React from 'react'
import { useState } from 'react';

 


function Home() {
  
    const [name, setName]=useState("mario");

    const handleClick = () =>{
        if(name=="mario"){
            setName("luigi")
        } else {
            setName("mario")
        }
        
    }

    const handleClickAgain = (name, e) => {
        console.log("hello" , e.target);
    }

    return (
    <div className='home'>
        <h2>Homepage</h2>
        <p>{name}</p>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={(e)=>
            handleClickAgain("Jul", e)
        }>Click Me again</button>
    </div>
  )
}

export default Home