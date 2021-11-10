import React from "react";
import styled from "styled-components";

const HomeNav = () => {
    return (
        <StyledHomeNav>
            <a className="active">글</a>
            <a>시리즈</a>
            <a>소개</a>
        </StyledHomeNav>
    );
};

export default HomeNav;

const StyledHomeNav = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    margin-bottom: 15px;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 1rem;
        width: 8rem;
        height: 2.5rem;
        flex: 1 1 0%;
    }

    a.active {
        color: rgb(32, 201, 151);
        border-bottom: 2px solid rgb(32, 201, 151);
    }
`;
