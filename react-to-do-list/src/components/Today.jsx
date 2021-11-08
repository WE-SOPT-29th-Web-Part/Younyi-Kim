import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Today = ({ todayInfo, setTodayInfo }) => {
    const [todoList, setTodoList] = useState([]);
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleAdd = () => {
        // 내용이 빈 상태로 버튼 클릭 or Enter 시 list에 add하지 않아야함.
        if (!value) return;
        const newList = todoList.concat({ id: uuidv4(), value });

        setTodoList(newList);

        setTodayInfo(() => ({
            data: newList,
        }));

        setValue("");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleAdd();
        }
    };

    const handleDelete = (id) => {
        const newList = todoList.filter((todo) => todo.id !== id);

        setTodoList(newList);

        setTodayInfo(() => ({
            data: newList,
        }));
    };

    return (
        <TodoToday>
            <h2>Today</h2>
            <Ul>
                {todayInfo.data &&
                    todayInfo.data.map((todo) => (
                        <li key={todo.id}>
                            <span>{todo.value}</span>
                            <button onClick={() => handleDelete(todo.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
            </Ul>
            <input
                type="text"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                value={value}
                placeholder="Add To-Do"
            />
            <button onClick={handleAdd}>Add</button>
        </TodoToday>
    );
};

export default Today;

const TodoToday = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    background-color: #719192;
    border-right: 3px solid #5f6769;

    h2 {
        color: #dfcdc3;
    }

    input {
        outline: 0;
        width: 95%;
        border: 0;
        border-bottom: 1px solid #dfcdc3;
        margin-bottom: 5px;
        padding-bottom: 2px;
        background-color: inherit;

        &:focus::placeholder {
            color: transparent;
        }

        &::placeholder {
            color: #dfcdc3;
        }
    }

    button {
        height: 30px;
        color: #f6f6f6;
        width: 95%;
        border: 0;
        border-radius: 5px;
        margin: 5px 0 10px 0;
        background-color: #3c4245a7;
    }
`;

const Ul = styled.ul`
    width: 95%;
    flex-grow: 1;
    background-color: #546a6b7e;
    margin-bottom: 15px;

    li {
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        margin: 20px 10px;
        border-bottom: 1px solid #f6f6f6;
        color: #f6f6f6;

        span {
            height: 26px;
            line-height: 26px;
        }

        button {
            margin: 0;
            margin-bottom: 3px;
            width: 50px;
            height: 26px;
            line-height: 26px;
        }
    }
`;
