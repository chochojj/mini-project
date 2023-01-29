import React from "react";
import styled from "styled-components";

const TodoThings = styled.div`

`
function TodoList(){
    return (
        <TodoThings>
            {TodoList.map(todo => (
                <TodoItem
                    id = {todo.id}
                    text = {todo.text}
                    done = {todo.done}
                    key = {todo.id}
                />
            ))}
        </TodoThings>
    );
}
export default TodoList;