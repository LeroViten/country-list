import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './Filter.scss';

export default function Filter() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      return toast.error('The field cannot be empty! 😢');
    }
  };

  return (
    <div className="filterWrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          autoComplete="off"
          placeholder="Start typing to find a specific country"
        />
        <button type="submit" className="filterSearchBtn">
          Search
        </button>
      </form>
    </div>
  );
}
