import React from 'react';
import { Link } from 'react-router-dom';

const Bloglist = ({ blogs, onDelete }) => {
    return (
      <div className='blog-list-container'>
        <h2>Blog List</h2>
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
              <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
              <button onClick={() => onDelete(blog.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
          }




export default Bloglist;