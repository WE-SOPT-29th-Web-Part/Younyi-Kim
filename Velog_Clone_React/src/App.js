import styled from "styled-components";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Write from "./pages/Write";

function App() {
    // 1. 페이지 라우팅 - react-router-dom
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/write" element={<Write />} />
                    <Route element={() => <div>Page Not Found</div>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
