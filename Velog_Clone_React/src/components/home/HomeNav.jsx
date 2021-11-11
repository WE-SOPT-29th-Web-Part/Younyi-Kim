import React, { useState } from "react";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import styled from "styled-components";
import SeriesCategory from "../../pages/SeriesCategory";

const HomeNav = () => {
    const [isActiveNav, setIsActiveNav] = useState(true);

    const handleClick = (e) => {
        switch (e.target.name) {
            case "article":
                setIsActiveNav(true);
                break;
            case "series":
                setIsActiveNav(false);
                break;
            default:
                break;
        }
    };

    return (
        <StyledHomeNav isActiveNav={isActiveNav}>
            <Link to="/" name="article" onClick={handleClick}>
                글
            </Link>
            <Link to="/series" name="series" onClick={handleClick}>
                시리즈
            </Link>
            <StyledActiveLine isActiveNav={isActiveNav} />
        </StyledHomeNav>
    );
};

export default HomeNav;
let flag = true;
const StyledHomeNav = styled.nav`
    display: flex;
    position: relative;
    width: 100%;
    margin-bottom: 15px;

    & > a {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 1rem;
        width: 8rem;
        height: 2.5rem;
        flex: 1 1 0%;
        text-decoration: none;
        color: black;
    }

    & > a:nth-child(1) {
        color: ${({ isActiveNav }) => isActiveNav && "rgb(32, 201, 151)"};
    }

    & > a:nth-child(2) {
        color: ${({ isActiveNav }) => !isActiveNav && "rgb(32, 201, 151)"};
    }
`;

const StyledActiveLine = styled.div`
    position: absolute;
    bottom: 0;
    width: 50%;
    height: 2px;
    background: rgb(32, 201, 151);
    transition: transform 250ms ease;
    transform: ${({ isActiveNav }) => !isActiveNav && "translateX(100%)"};
`;
