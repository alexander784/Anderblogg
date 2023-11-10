import React from 'react';

const BlogDetail = ({ blog }) => {
    return (
      <div>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
      </div>
    );
  }


export default BlogDetails;