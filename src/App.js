import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogList from './Bloglist';
import BlogDetail from './BlogDetail';
import AddBlog from './AddBlog';

  function App() {
    const [blogs, setBlogs] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/blogs')
        .then(response => response.json())
        .then(data => setBlogs(data));
    }, []);
  
    const handleDelete = (id) => {
      fetch(`http://localhost:3001/blogs/${id}`, {
        method: 'DELETE',
      }).then(() => {
        setBlogs(blogs.filter(blog => blog.id !== id));
      });
    };

    const handleAdd = (newBlog) => {
      fetch('http://localhost:3001/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlog),
      })
        .then(response => response.json())
        .then(data => setBlogs([...blogs, data]));
    };
}







export default App;