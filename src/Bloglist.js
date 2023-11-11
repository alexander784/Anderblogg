import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Bloglist = ({ blogs, onDelete }) => {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  const handleSearch = (searchQuery) => {
    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  return (
    <div className='blog-list-container'>
      <h2>Lexa Blogs</h2>

      {/* Utilize the Search component */}
      <Search onSearch={handleSearch} />

      <div className="blog-cards-container">
        {filteredBlogs.map(blog => (
          <div key={blog.id} className="blog-card">
            {blog.imageUrl && (
              <div className="blog-image">
                <img src={blog.imageUrl} alt={`${blog.title}`} height={"10vh"} width={"10vh"} />
              </div>
            )}
            <div className="blog-content">
              <Link to={`/blog/${blog.id}`}>
                <h3>{blog.title}</h3>
              </Link>
              <p>{blog.content}</p>
              <span>
                 <button className="styled-button" onClick={() => onDelete(blog.id)}>X</button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bloglist;
