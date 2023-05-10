import React from 'react'

const handleClick = () =>{
    console.log("test");
}

const handleClickAgain = (name) => {
    console.log("hello "+name);
} 

function Home() {
  return (
    <div className='home'>
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={()=>
            handleClickAgain("Jul")
        }>Click Me again</button>
    </div>
  )
}

export default Home