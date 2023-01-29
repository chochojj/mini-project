import React from "react";
import styled from 'styled-components';

const TodoBoxStyled = styled.div`
    width: 330px;
    height: 600px;

    position: relative;
    background: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    margin-top: 125px;
`

function TodoBox({children}){
    return <TodoBoxStyled>{children}</TodoBoxStyled>
    // 컴포넌트 선언이랑 스타일 변수가 같으면 인식이 안됨
}

export default TodoBox;