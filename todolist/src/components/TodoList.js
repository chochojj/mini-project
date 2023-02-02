import React, { useState, useCallback, useEffect, useRef } from 'react';
import AddForm from './AddForm';
import Todo from './Todo';
import styled from 'styled-components';


const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState(0);
  // useEffect는 마운트되고 업데이트 될때 실행되는데 업데이트 될때만 실행시키고 싶을때 쓰는 방법은 useRef(false)해주기
  // https://xiubindev.tistory.com/100
  const isMount = useRef(true);

  useEffect(() => {
    if (!isMount.current) {
      localStorage.setItem('todoList', JSON.stringify(todoList));
      localStorage.setItem('id', id);
    }
  }, [todoList, id]);

  useEffect(() => {
    const localTodoList = localStorage.getItem('todoList');
    if (localTodoList) {
      setTodoList(JSON.parse(localTodoList));
    }
    const localId = localStorage.getItem('id');
    if (localId) {
      setId(parseInt(localId));
    }
    isMount.current = false;
  }, []);

  const addTodo = useCallback(
    (todo) => (e) => {
      console.log('add');
      e.preventDefault();
      if (todo) {
        setTodoList((prevTodoList) => [
          ...prevTodoList,
          { id: id, todo: todo, isChecked: false },
        ]);
        setId((prevId) => prevId + 1);
      }
    },
    [id]
  );

  const updateTodo = useCallback(
    (id, todo, isChecked) => {
      const index = todoList.findIndex((todoInfo) => todoInfo.id === id);
      const newTodoList = [...todoList];
      newTodoList.splice(index, 1, {
        id: id,
        todo: todo,
        isChecked: isChecked,
      });
      setTodoList(newTodoList);
    },
    [todoList]
  );

  const deleteTodo = useCallback(
    (id) => () => {
      const newTodoList = todoList.filter((todoInfo) => todoInfo.id !== id);
      setTodoList(newTodoList);
    },
    [todoList]
  );

  const toggleCheck = useCallback(
    (id) => () => {
      const index = todoList.findIndex((todoInfo) => todoInfo.id === id);
      const newTodoList = [...todoList];
      newTodoList[index].isChecked = newTodoList[index].isChecked
        ? false
        : true;
      setTodoList(newTodoList);
    },
    [todoList]
  );

  return (
    <div className="box">
      <div className="todolist-box">
        <h1>투두리스트</h1>
        <AddForm addTodo={addTodo} />
        <ul>
          {todoList.map((todoInfo) => {
            return (
              <Todo
                key={todoInfo.id}
                id={todoInfo.id}
                todo={todoInfo.todo}
                isChecked={todoInfo.isChecked}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
                toggleCheck={toggleCheck}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;