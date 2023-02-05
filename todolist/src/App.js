// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoList from './components/TodoList';
import Todo from './components/Todo';
import AddForm from './components/AddForm';


const GlobalStyle = createGlobalStyle`
  

  *{
    list-style: none;
    text-decoration: none;
    font-family: "NanumLt"
  }
  body {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    padding : 0;
    box-sizing: border-box;
    display : flex;
    justify-content: center;
    align-items: center;
    background-image: url(https://i.pinimg.com/564x/01/04/fa/0104fa2f4166c80aceec00e243e15d25.jpg);
    /* 높이를 줘야 align-items: center; 가 먹음 */
  }
  

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList>
        <AddForm/>
        <Todo/>
      </TodoList>
    </>
  );
}

export default App;
