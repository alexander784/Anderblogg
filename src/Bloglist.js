import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Bloglist = ({ blogs, onDelete }) => {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Update filteredBlogs when blogs prop changes (initial load or data changes)
    setFilteredBlogs(blogs);
  }, [blogs]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  return (
    <div className='blog-list-container'>
      <h2>Lexa Blogs</h2>

      <Search onSearch={handleSearch} />

      <div className="blog-cards-container">
        {filteredBlogs.map(blog => (
          <div key={blog.id} className="blog-card">
            {blog.imageUrl && (
              <div className="blog-image">
                <img src={blog.imageUrl} alt={`${blog.title}`} />
              </div>
            )}
            <div className="blog-title-card">
              <div className="blog-content">
                <Link to={`/blog/${blog.id}`}>
                  <h3>{blog.title}</h3>
                </Link>
                <span>
                  <button className="styled-button" onClick={() => onDelete(blog.id)}>X</button>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bloglist;
