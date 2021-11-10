import React from "react";
import PublishPreview from "./PublishPreview";
import PublishSubmit from "./PublishSubmit";
import styled from "styled-components";

const Publish = ({
    summary,
    createArticle,
    isPublishScreen,
    setIsPublishScreen,
}) => {
    return (
        <StyledRoot isPublishScreen={isPublishScreen}>
            <PublishPreview handdle />
            <PublishSubmit />
        </StyledRoot>
    );
};

export default Publish;

const StyledRoot = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: whitesmoke;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
`;
