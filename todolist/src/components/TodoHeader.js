import React from "react";
import styled from "styled-components";

const TodoHead = styled.div`
    .header {
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 35px;
    }
    span {
        position: relative;
        width: 70%;
        font-size: 28px;
        color: #606060;
    }
    .day{
        position: relative;
        font-weight: bold;
    }
    .tasksLeft{
        position: absolute;
        top: 40px;
        left: 40px;
        font-size: 18px;
    }
`


function TodoHeader() {
    return (
        <TodoHead>
            <div className="header">
                <span> 2022.01.29</span>
                <div className="day">일</div>
                <div className="tasksLeft">1/n</div>
            </div>
        </TodoHead>
    )
}

export default TodoHeader;