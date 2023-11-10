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
}
// Call the onAdd function with the new blog data
onAdd({ title, content });

// Clear form inputs
setTitle('');
setContent('');
};






export default AddBlog;