import React from 'react'
import BlogList from '../BlogList';
import useFetch from '../useFetch';

 function Home() {

    const {data :  blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
    <div className='home'>
        {Error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Titles"/> }
    </div>
  )
}

export default Home;