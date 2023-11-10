import React from 'react';
import { Link } from 'react-router-dom';

const Bloglist = ({ blogs, onDelete }) => {
  return (
    <div className='blog-list-container'>
      <h2>lexa blogs</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id} className="blog-item">
            <div className="blog-content">
              <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
              <button onClick={() => onDelete(blog.id)}>X</button>
            </div>
            {blog.imageUrl && (
              <div className="blog-image">
                <img src={blog.imageUrl} alt={`Thumbnail for ${blog.title}`} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bloglist;
