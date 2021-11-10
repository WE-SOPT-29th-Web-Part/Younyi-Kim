import React from "react";
import styled from "styled-components";

const ArticleTags = ({ tags, articleData, setArticleData }) => {
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            const tempData = { ...articleData };

            tempData.tags = [...tempData.tags, e.target.value];
            setArticleData(tempData);

            e.target.value = "";
        }
    };
    return (
        <StyledArticleTags>
            {tags.map((tag) => (
                <span key={tag}>{tag}</span>
            ))}
            <input
                type="text"
                placeholder="태그를 입력하세요"
                onKeyPress={handleKeyPress}
            />
        </StyledArticleTags>
    );
};

export default ArticleTags;

const StyledArticleTags = styled.div`
    padding: 0 1rem 2rem 1rem;
    display: flex;

    & > input {
        color: rgb(52, 58, 64);
        font-size: 0.8rem;
        display: flex;
        flex-wrap: wrap;
        border: 0;
        outline: 0;
        height: 1.5rem;
        line-height: 1.5rem;
    }

    & > input::placeholder {
        font-size: 0.8rem;
    }

    & > span {
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: 0.75rem;
        border-radius: 0.75rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        background: rgb(241, 243, 245);
        color: rgb(12, 166, 120);
    }
`;
