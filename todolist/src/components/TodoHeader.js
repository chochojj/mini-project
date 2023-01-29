import React from "react";
import styled from "styled-components";

const TodoHead = styled.div`

`

function TodoHeader() {
    return (
        <TodoHead>
            <h1> 2022.01.29</h1>
            <div className="day">요일</div>
            <div className="tasksLeft">남은 일 갯수</div>
        </TodoHead>
    )
}

export default TodoHeader;