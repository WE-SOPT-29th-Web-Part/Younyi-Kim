import React from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const ArticleFooter = ({ setIsPublishScreen }) => {
    return (
        <StyledArticleFooter>
            <StyledFooterWrapper>
                <button>
                    <FaArrowLeft />
                    <span>나가기</span>
                </button>
                <StyledSubmitButton>
                    <button>임시저장</button>
                    <button onClick={() => setIsPublishScreen(true)}>
                        출간하기
                    </button>
                </StyledSubmitButton>
            </StyledFooterWrapper>
        </StyledArticleFooter>
    );
};

export default ArticleFooter;

const StyledArticleFooter = styled.div`
    position: fixed;
    bottom: 0px;
    z-index: 10;
    width: 100%;
`;

const StyledFooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;

    button {
        border: 0;
        outline: 0;
        cursor: pointer;
        background-color: inherit;
    }

    & > button span {
        margin-left: 10px;
        font-size: 1.125rem;
    }
`;

const StyledSubmitButton = styled.div`
    button {
        padding: 0.7rem 1.2rem;
        border-radius: 5px;
        font-size: 1.125rem;
    }

    button:hover {
        opacity: 0.9;
    }

    & > button:first-child {
        background: rgb(233, 236, 239);
        color: rgb(73, 80, 87);
        margin-right: 10px;
    }

    & > button {
        background: rgb(18, 184, 134);
        color: white;
    }
`;
