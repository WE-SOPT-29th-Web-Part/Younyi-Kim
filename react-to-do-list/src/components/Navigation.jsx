import React, { useState } from "react";
import styled from "styled-components";

const Navigation = ({ todoInfo, setTodoInfo }) => {
    const handleToday = () => {
        setTodoInfo(() => ({
            status: "today",
        }));
    };

    const handleTomorrow = () => {
        setTodoInfo(() => ({
            status: "tomorrow",
        }));
    };

    const handleBoth = () => {
        setTodoInfo(() => ({
            status: "both",
        }));
    };
    return (
        <Options>
            <ButtonStyle onClick={handleToday}>Today</ButtonStyle>
            <ButtonStyle onClick={handleTomorrow}>Tomorrow</ButtonStyle>
            <ButtonStyle onClick={handleBoth}>Show All</ButtonStyle>
        </Options>
    );
};

export default Navigation;

const Options = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 0 10px;
`;

const ButtonStyle = styled.button`
    border: 0;
    outline: 0;
    padding: 5px;
    margin-right: 10px;
    border-radius: 5px;

    &:nth-child(3) {
        margin-right: 0;
    }
`;
