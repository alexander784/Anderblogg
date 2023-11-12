import React from 'react';

const BlogDetails = ({ blog, imageUrl }) => {
    return (
      <div>
        <h2>{blog.title}</h2>
        { blog.imageUrl }
      </div>
    );
  }


export default BlogDetails;