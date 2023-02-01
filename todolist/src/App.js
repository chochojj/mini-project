// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoList from './components/TodoList';
import Todo from './components/Todo';
import AddForm from './components/AddForm';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    padding : 0;

    background: #4D4C7D;
    display : flex;
    justify-content: center;
    /* body에 align-content: center;가 안먹음 ㅠ */
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
