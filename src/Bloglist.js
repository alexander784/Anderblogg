import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs, onDelete }) => {
    return (
      <div>
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




export default bloglist;