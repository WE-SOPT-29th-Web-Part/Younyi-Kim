import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Result from "./components/Result";
import SearchBar from "./components/SearchBar";

function App() {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        console.log(userInfo);
    }, [userInfo]);

    return (
        <Root>
            <Header />
            <SearchBar setUserInfo={setUserInfo} />
            <Result userInfo={userInfo} setUserInfo={setUserInfo} />
        </Root>
    );
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export default App;
