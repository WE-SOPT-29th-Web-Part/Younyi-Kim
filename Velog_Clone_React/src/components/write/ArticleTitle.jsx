import React from "react";
import ArticleCard from "./ArticleCard";
import styled from "styled-components";

const ArticleTitle = ({ setArticleData }) => {
    // textarea의 value가 변할 때 articleData.title를 변경
    const handleChange = (e) => {
        setArticleData((articleData) => ({
            ...articleData, // spread 연산자 각각의 프로퍼티를 펼쳐줌. (id, body, title 등등)
            title: e.target.value,
        }));
    };
    return (
        <StyledTitle>
            <textarea
                placeholder="제목을 입력하세요"
                onChange={handleChange}
            ></textarea>
            <StyledTitleLine></StyledTitleLine>
        </StyledTitle>
    );
};

export default ArticleTitle;

const StyledTitle = styled.div`
    padding: 1rem;
    & > textarea {
        width: 100%;
        outline: 0;
        border: 0;
        font-size: 28px;
        font-weight: bold;
        background: inherit;
        resize: none;
    }

    & > textarea::placeholder {
        color: rgb(173, 184, 196);
    }
`;

const StyledTitleLine = styled.div`
    background: rgb(73, 80, 87);
    height: 6px;
    width: 4rem;
    border-radius: 2px;
`;
