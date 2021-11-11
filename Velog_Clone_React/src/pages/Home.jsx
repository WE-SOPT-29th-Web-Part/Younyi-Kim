import React from "react";
import Header from "../components/common/Header";
import Profile from "../components/home/Profile";
import HomeNav from "../components/home/HomeNav";
import ArticlesContainer from "../components/home/ArticlesContainer";
import { Outlet, Route } from "react-router";
import SeriesCategory from "./SeriesCategory";

const Home = ({ match }) => {
    // get & post
    // get => ArticleContainer
    // post => Write
    console.log(match);
    return (
        <>
            <div>
                <Header />
                <Profile />
                <HomeNav />
                {/* <ArticlesContainer /> */}
                <Outlet />
            </div>
            {/* <Route path={match.path} element={<SeriesCategory />} /> */}
        </>
    );
};

export default Home;
