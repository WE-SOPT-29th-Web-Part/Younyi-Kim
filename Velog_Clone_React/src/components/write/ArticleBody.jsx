import React from "react";
import styled from "styled-components";

const ArticleBody = ({ setArticleData }) => {
    const handleChange = (e) => {
        setArticleData((articleData) => ({
            ...articleData,
            body: e.target.value,
        }));
    };
    return (
        <StyledAricleBody>
            <textarea
                placeholder="당신의 이야기를 적어보세요..."
                onChange={handleChange}
            ></textarea>
        </StyledAricleBody>
    );
};

export default ArticleBody;

const StyledAricleBody = styled.div`
    flex: 1 1 0%;
    padding: 1rem;
    & > textarea {
        width: 100%;
        height: 100%;
        border: 0;
        outline: 0;
        resize: none;
    }

    & > textarea::placeholder {
        font-style: italic;
        color: rgb(176, 186, 196);
    }
`;
