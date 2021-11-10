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

    & > input {
        color: rgb(52, 58, 64);
        font-size: 0.8rem;
        display: flex;
        flex-wrap: wrap;
        border: 0;
        outline: 0;
    }

    & > input::placeholder {
        font-size: 0.8rem;
    }
`;
