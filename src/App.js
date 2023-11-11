import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogList from './Bloglist';
import BlogDetail from './BlogDetails';
import AddBlog from './AddBlog';
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);

  const handleDelete = (id) => {
    if (!id) {
      console.error('Invalid id:', id);
      return;
    }

    fetch(`http://localhost:5001/blogs${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
      })
      .catch(error => console.error('Error deleting blog:', error));
  };

  const handleAdd = (newBlog) => {
    fetch('http://localhost:5001/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBlog),
    })
      .then(response => response.json())
      .then(data => setBlogs([...blogs, data]));
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Blog</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<BlogList blogs={blogs} onDelete={handleDelete} />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/add" element={<AddBlog onAdd={handleAdd} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
