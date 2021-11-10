import React from "react";
import styled from "styled-components";

const PublishSubmit = () => {
    return (
        <StyledSubmit>
            <div></div>
            <button>취소</button>
            <button>출간하기</button>
        </StyledSubmit>
    );
};

export default PublishSubmit;

const StyledSubmit = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    div {
        position: absolute;
        left: 0;
        height: 90%;
        width: 1px;
        background: rgb(233, 236, 239);
    }

    button {
        border: 0;
        outline: 0;
        cursor: pointer;
        padding: 0.7rem 1.2rem;
        border-radius: 5px;
        font-size: 1.125rem;
    }

    & > button:nth-child(2) {
        background: rgb(134, 142, 150);
        color: white;
        margin-right: 10px;
    }

    & > button {
        background: rgb(18, 184, 134);
        color: white;
    }
`;
