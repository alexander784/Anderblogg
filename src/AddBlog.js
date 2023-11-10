// src/components/AddBlog.js
import React, { useState } from 'react';

const AddBlog = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!title || !content) {
      alert('Please fill in all fields.');
      return;
    }

    // Call the onAdd function with the new blog data
    onAdd({ title, content });

    // Clear form inputs
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
}

export default AddBlog;
