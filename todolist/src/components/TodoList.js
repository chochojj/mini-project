import React, { useState, useCallback, useEffect, useRef } from 'react';
import AddForm from './AddForm';
import Todo from './Todo';
import styled from 'styled-components';

const StyledTodoList = styled.div`
  .todolist-box{
    width: 400px;
    height: 500px;
    background-color: rgba(255,255,255,0.7);
    display: flex;
    flex-direction: column;

    align-items: center;
    border-radius: 20px;
    box-shadow: 0px 0px 5px rgba(0,0,0, 0.1);
  }
  .header{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .info{
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-top: 20px;
  }
  .info > span{
    font-weight: bold;
    /* display: none; */
  }
  .info > span::selection {
    color: green;
	}
	h1::selection {
		color: orange;
  }
  h1 {
    margin: 0;
    font-size: 22px;
    line-height: 50px;
  }
  .undone{
    
  }
  .date{
    width: 85%;
    font-size: 13px;
    font-weight:600;
  }
  .date > span::selection{
		color: orange;
  }
  .day{
    margin-left: 5px;
  }
  .day::selection{
    color: orange;
  }
  ul{
    padding: 0;
    height: 340px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  ul::-webkit-scrollbar {
    display: none;
  }
`

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState(0);
  // useEffect는 마운트될 때 실행1 업데이트 될때 실행2되는데 업데이트 될때만 실행시키고 싶을때 쓰는 방법은 useRef(false)가 있음
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
  
  const today = new Date();
  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });
  
  //할일 상태 보기
  // const todos = useTodoState();
  // const undoneTasks = todos.filter(todo => !todo.done);
  //{undoneTasks.length}개 
  const undone = todoList.filter((todo)=> !todo.isChecked);
  

  return (
    <StyledTodoList>
      <div className="todolist-box">
        <div className='header'>
          <div className='info'>
            <h1>오늘의 할 일 목록</h1>
            <span className='undone'>{undone.length}개 </span>
          </div>
          <div className='date'>  
            <span>{dateString}</span>
            <span className="day">{dayName}</span>
          </div>
        </div>
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
    </StyledTodoList>
  );
};

export default TodoList;