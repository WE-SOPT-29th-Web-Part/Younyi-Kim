import React, { useState } from "react";
import styled from "styled-components";
import Today from "./Today";
import Tomorrow from "./Tomorrow";

const Todos = ({ todoStat }) => {
    const [isTodayMounted, setIsTodayMounted] = useState(false);
    const [isTomMounted, setIsTomMounted] = useState(false);

    const [tomorrowInfo, setTomorrowInfo] = useState([{ data: null }]);

    const [todayInfo, setTodayInfo] = useState([{ data: null }]);

    switch (todoStat.status) {
        case "today":
            return (
                <Todo>
                    <Today todayInfo={todayInfo} setTodayInfo={setTodayInfo} />
                </Todo>
            );
        case "tomorrow":
            return (
                <Todo>
                    <Tomorrow
                        tomorrowInfo={tomorrowInfo}
                        setTomorrowInfo={setTomorrowInfo}
                    />
                </Todo>
            );
        default:
            return (
                <Todo>
                    <Today todayInfo={todayInfo} setTodayInfo={setTodayInfo} />
                    <Tomorrow
                        tomorrowInfo={tomorrowInfo}
                        setTomorrowInfo={setTomorrowInfo}
                    />
                </Todo>
            );
    }
};

export default Todos;

const Todo = styled.div`
    display: flex;
    flex-grow: 1;
    margin-top: 15px;
    background-color: #719192;
`;
