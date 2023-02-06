import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';

const StyledAddForm = styled.div`
  button::selection{
    background: none;
  }
  input::selection{
    background: none;
  }
  form{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input{
    width: 270px;
    height: 30px;
    background-color: rgba(255, 201, 54, 0.3);
    border: none;
    border-radius: 5px 0 0 5px;
  }
  button{
    width: 65px;
    height: 32px;
    border: none;
    background-color: rgba(1, 107, 8, 0.4);
    font-weight: bold;
    font-family:  "NanumRg";
    border-radius: 0 5px 5px 0;
  }
  button:hover{
    cursor: pointer;
  }
`

const AddForm = memo(({ addTodo }) => {
  const [value, setValue] = useState('');
  // 할일 입력칸(input)에 자동으로 포커스, 입력 후 초기화 시켜주는 코드
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
    setValue('');
  }, [addTodo]);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <StyledAddForm>
      <form className="add-form">
        <input ref={input} value={value} onChange={onChangeInput} placeholder={`오늘의 할 일 입력하기 !`} />
        <button type="submit" onClick={addTodo(value)}>
          추가
        </button>
      </form>
    </StyledAddForm>
  );
});

export default AddForm;