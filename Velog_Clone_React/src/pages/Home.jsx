import React from "react";
import Header from "../components/common/Header";
import Profile from "../components/home/Profile";
import HomeNav from "../components/home/HomeNav";
import { Outlet, Route } from "react-router";

const Home = () => {
    return (
        <>
            <div>
                <Header />
                <Profile />
                <HomeNav />
                <Outlet />
            </div>
        </>
    );
};

export default Home;
