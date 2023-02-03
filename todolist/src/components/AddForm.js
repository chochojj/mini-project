import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';

const AddForm = memo(({ addTodo }) => {
  const [value, setValue] = useState('');
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
    setValue('');
  }, [addTodo]);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="add-form">
      <input ref={input} value={value} onChange={onChangeInput} />
      <button type="submit" onClick={addTodo(value)}>
        +
      </button>
    </form>
  );
});

export default AddForm;