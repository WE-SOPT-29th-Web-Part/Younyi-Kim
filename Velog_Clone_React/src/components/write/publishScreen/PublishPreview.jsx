import React from "react";
import styled from "styled-components";

const PublishPreview = () => {
    return (
        <StyledPreview>
            <h2>포스트 미리보기</h2>
            <StyledImgUpload>
                <button>썸네일 업로드</button>
            </StyledImgUpload>
            <StyledSummary>
                <h3>ff</h3>
                <textarea></textarea>
                <StyledLenght>
                    <span>1</span> / <span>150</span>
                </StyledLenght>
            </StyledSummary>
        </StyledPreview>
    );
};

export default PublishPreview;

const StyledPreview = styled.div`
    width: 100%;
    height: 100%;
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem;

    & > h2 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 1rem;
    }
`;

const StyledImgUpload = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    background-color: rgb(233, 236, 239);

    & > button {
        padding: 0.3rem 0.8rem;
        border-radius: 5px;
        font-size: 1.125rem;
        border: 0;
        outline: 0;
        background: white;
        color: rgb(18, 184, 134);
    }
`;

const StyledSummary = styled.div`
    width: 100%;
    position: relative;
    & > h3 {
        font-size: 19px;
        padding: 20px 0 10px 0;
    }

    & > textarea {
        border: 0;
        outline: 0;
        resize: none;
        height: 100%;
        width: 100%;
        box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
    }
`;

const StyledLenght = styled.div`
    position: absolute;
    bottom: -70px;
    right: 0;
    font-size: 0.7rem;
    color: rgb(133, 133, 133);
`;
