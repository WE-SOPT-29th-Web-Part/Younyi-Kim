import React from "react";
import styled from "styled-components";

const Navigation = ({ todoStat, setTodoStat }) => {
    const handleToday = () => {
        setTodoStat(() => ({
            status: "today",
        }));
    };

    const handleTomorrow = () => {
        setTodoStat(() => ({
            status: "tomorrow",
        }));
    };

    const handleBoth = () => {
        setTodoStat(() => ({
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
