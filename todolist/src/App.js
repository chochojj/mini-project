// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoBox from './components/TodoBox';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

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
      <TodoBox>
        <TodoHeader/>
        <TodoList/>
      </TodoBox>
    </>
  );
}

export default App;
