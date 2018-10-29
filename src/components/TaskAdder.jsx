import React, { useState } from 'react';

const TaskAdder = ({ dispatch }) => {
  const [text, setText] = useState('');

  const handleTextChange = e => {
    const { value } = e.target;
    setText(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD',
      payload: text
    });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" value={text} onChange={handleTextChange} />
      <button>Add!</button>
    </form>
  );
};

export default TaskAdder;
