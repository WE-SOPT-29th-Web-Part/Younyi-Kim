import React from "react";
import styled from "styled-components";

const ArticleTitle = ({ setArticleData }) => {
    const handleChange = (e) => {
        setArticleData((articleData) => ({
            ...articleData,
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
