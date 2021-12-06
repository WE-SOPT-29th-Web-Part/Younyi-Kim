import React from 'react';
import styled from 'styled-components';

const ArticleTitle = ({ onDataChange, title }) => {
    return (
        <StyledTitle>
            <textarea
                placeholder='제목을 입력하세요'
                value={title}
                onChange={(e) => onDataChange('title', e.target.value)}
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
