import React from 'react';
import Header from '../components/common/Header';
import Profile from '../components/home/Profile';
import HomeNav from '../components/home/HomeNav';
import { Outlet, Route } from 'react-router';
import MarkdownRender from '../components/MarkdownRender';

const Home = () => {
    return (
        <>
            <div>
                <Header />
                <Profile />
                <MarkdownRender />
                <HomeNav />
                <Outlet />
            </div>
        </>
    );
};

export default Home;
