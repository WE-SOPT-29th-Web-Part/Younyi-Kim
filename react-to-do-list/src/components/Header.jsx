import React from "react";
import styled from "styled-components";
const Header = () => {
    return <HeaderTitle>To Do List</HeaderTitle>;
};

export default Header;

const HeaderTitle = styled.h1`
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    color: #dfcdc3;
`;
