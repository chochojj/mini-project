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
    margin: 0 auto;
    padding : 0;
    background: #4D4C7D;
    display : flex;
    justify-content: center;
    margin-top: 100px;

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
