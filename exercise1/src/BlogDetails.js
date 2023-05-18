import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const BlogDetails = () => {
  
    const {id} = useParams()

    return (
    <div>BlogDetails - {id}</div>
  )
}

export default BlogDetails