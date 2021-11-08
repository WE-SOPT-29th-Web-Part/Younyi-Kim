import React from "react";
import styled from "styled-components";
import Today from "./Today";
import Tomorrow from "./Tomorrow";

const Todos = ({ todoInfo, setTodoInfo, handleChangeTodo }) => {
    //  현재 문제점 : 리스트가 추가되는 state의 변화가 자식 컴포넌트(Today 등)에서 발생
    // childern => parent state lifting 방법 생각
    switch (todoInfo.status) {
        case "today":
            return (
                <Todo>
                    <Today
                        todoInfo={todoInfo}
                        setTodoInfo={setTodoInfo}
                        handleChangeTodo={handleChangeTodo}
                    />
                </Todo>
            );
        case "tomorrow":
            return (
                <Todo>
                    <Tomorrow todoInfo={todoInfo} setTodoInfo={setTodoInfo} />
                </Todo>
            );
        default:
            return (
                <Todo>
                    <Today
                        todoInfo={todoInfo}
                        setTodoInfo={setTodoInfo}
                        handleChangeTodo={handleChangeTodo}
                    />
                    <Tomorrow todoInfo={todoInfo} setTodoInfo={setTodoInfo} />
                </Todo>
            );
    }
};

export default Todos;

const Todo = styled.div`
    display: flex;
    flex-grow: 1;
    margin-top: 15px;
`;
