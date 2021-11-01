import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Result from "./components/Result";
import Result2 from "./components/Result2";
import SearchBar from "./components/SearchBar";

function App() {
    const [userInfo, setUserInfo] = useState({ data: null, status: "idle" });

    // API 통신 상태에 따른 분기 처리
    // userInfo - 유저의 정보를 받아옴
    // 분기처리 : idle(data 받아오지 않은 기본 상태)

    useEffect(() => {
        console.log(userInfo);
    }, [userInfo]);

    return (
        <Root>
            <Header />
            <SearchBar setUserInfo={setUserInfo} />
            {/* <Result userInfo={userInfo} setUserInfo={setUserInfo} /> */}
            <Result2 userInfo={userInfo} setUserInfo={setUserInfo} />
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
