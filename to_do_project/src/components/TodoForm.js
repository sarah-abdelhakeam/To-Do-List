import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {

  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => 
  {
    inputRef.current.focus();
  });

  const handleChange = e => 
  {

    setInput(e.target.value);
  };

  const handleSubmit = e => 
  {
    e.preventDefault();
     // to not refresh the page

    props.onSubmit(
      { 
      //! use random to make sure we generate unique numbers 
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update the item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a To-Do'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;