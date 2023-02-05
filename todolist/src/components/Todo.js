import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';

const StyledTodo = styled.div`
  .list {
    line-height: 30px;
    display: flex;
    list-style: none;
    width: 340px;
    align-items: center;
    font-size:15px;
    background-color: rgba(250, 240, 230, 0.425);
    text-decoration: antiquewhite;
    margin-bottom: 8px;
  }

  .list .check {
    cursor: pointer;
    align-self: center;
    font-size: 18px;
    margin-right: 10px;
    margin-left: 10px;
  }

  .list .todo {
    overflow-wrap: break-word;
    width: 270px;
  }

  .checked {
    text-decoration: line-through;
  }

  .list button {
    background-color: transparent;
  }

  .update-form input {
    background-color: transparent;
    border: none;
    width: 260px;
    margin-right: 10px;
    font-size: 15px;
    padding: 0;
  }

  .list button {
    font-size: 1vh;
    width: 20px;
    height: 20px;
    padding: 0;
    font-weight: bold;
    justify-self: center;
    align-self: center;
    border: none;
  }
  .list button:hover{
    cursor: pointer;
    background-color:rgba(133, 86, 40,0.7);
    color: white;
  }
`

const Todo = memo(
  ({ id, todo, isChecked, deleteTodo, updateTodo, toggleCheck }) => {
    const [value, setValue] = useState(todo);
    const [isUpdate, setIsUpdate] = useState(false);
    const input = useRef(null);

    useEffect(() => {
      if (isUpdate) {
        input.current.focus();
      }
    }, [isUpdate]);

    useEffect(() => {
      setIsUpdate(false);
    }, [todo]);

    const onClickTodo = () => {
      setIsUpdate(true);
    };

    const onChangeInput = (e) => {
      setValue(e.target.value);
    };

    const onFormSubmit = (e) => {
      e.preventDefault();
      setIsUpdate(false);
      if (!value) {
        setValue(todo);
      } else {
        if (todo !== value) {
          updateTodo(id, value, isChecked);
        }
      }
    };

    const onBlurInput = () => {
      setIsUpdate(false);
    };

    const onKeyUpInput = (e) => {
      if (e.key === 'Escape') {
        setIsUpdate(false);
      }
    };

    return (
      <StyledTodo>
        <li className="list">
          <span className="check" onClick={toggleCheck(id)}>
            {isChecked ? '🥰' : '😶'}
          </span>
          {isUpdate || (
            <span
              className={`todo ${isChecked ? 'checked' : ''}`}
              onClick={onClickTodo}
            >
              {todo}
            </span>
          )}
          {isUpdate && (
            <form className="update-form" onSubmit={onFormSubmit}>
              <input
                ref={input}
                value={value}
                onChange={onChangeInput}
                onBlur={onBlurInput}
                onKeyUp={onKeyUpInput}
              />
            </form>
          )}
          <button onClick={deleteTodo(id)}>X</button>
        </li>
      </StyledTodo>
    );
  }
);

export default Todo;