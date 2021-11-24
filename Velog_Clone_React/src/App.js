import styled from "styled-components";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Write from "./pages/Write";
import SeriesCategory from "./pages/SeriesCategory";
import ArticlesContainer from "./components/home/ArticlesContainer";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="/" element={<ArticlesContainer />} />
                        <Route path="/series" element={<SeriesCategory />} />
                    </Route>
                    <Route path="/write" element={<Write />} />
                    <Route element={() => <div>Page Not Found</div>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
