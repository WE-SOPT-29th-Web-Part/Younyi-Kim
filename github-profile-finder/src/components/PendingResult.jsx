import React from "react";
import styled from "styled-components";

const PendingResult = () => {
    return (
        <Root>
            <Loader></Loader>
        </Root>
    );
};

export default PendingResult;

const Root = styled.div`
    font-size: 48px;
    color: white;
    display: inline-block;
    height: 200px;
    width: 33.3%;
    position: relative;
`;

const Loader = styled.div`
    position: relative;
    width: 12px;
    height: 12px;
    top: 46%;
    left: 46%;
    border-radius: 12px;
    background-color: #fff;
    color: white;

    &::before {
        content: "";
        position: absolute;
        top: 0px;
        height: 12px;
        width: 12px;
        border-radius: 12px;
        animation: loader9g 3s ease-in-out infinite;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0px;
        height: 12px;
        width: 12px;
        border-radius: 12px;
        animation: loader9d 3s ease-in-out infinite;
    }

    @keyframes loader9g {
        0% {
            left: -25px;
            background-color: rgba(255, 255, 255, 0.8);
        }
        50% {
            left: 0px;
            background-color: rgba(255, 255, 255, 0.1);
        }
        100% {
            left: -25px;
            background-color: rgba(255, 255, 255, 0.8);
        }
    }

    @keyframes loader9d {
        0% {
            left: 25px;
            background-color: rgba(255, 255, 255, 0.8);
        }
        50% {
            left: 0px;
            background-color: rgba(255, 255, 255, 0.1);
        }
        100% {
            left: 25px;
            background-color: rgba(255, 255, 255, 0.8);
        }
    }
`;
