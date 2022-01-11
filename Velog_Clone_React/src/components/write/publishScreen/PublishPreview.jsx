import React, { useState } from 'react';
import styled from 'styled-components';
import { imageClient } from '../../../libs/api';

const PublishPreview = ({ summary, onDataChange }) => {
    const [previewUrl, setPreviewUrl] = useState();

    const MAX_LEN = 150;

    const handleChange = (e) => {
        const value = e.target.value;
        const length = value.length;

        if (length > MAX_LEN) {
            const emptySpace = MAX_LEN - summary.length;
            const fillSpace = value.slice(
                summary.length,
                summary.length + emptySpace
            );
            const resultSummary = summary + fillSpace;

            onDataChange('summary', resultSummary);
            return;
        }

        onDataChange('summary', value);
    };

    // Server에 이미지를 보내고, 정제된 이미지 url을 받아온다. => GET
    // 받아온 url을 articleData의 thumbnail에 저장해서 => POST
    const handleImgChange = async (e) => {
        console.log(e.target.files[0]);

        const formData = new FormData();
        const imageFile = e.target.files[0];

        formData.append('file', imageFile);

        // imageClient의 baseurl : http://localhost:5000/api/image
        //POST /api/image , Content-Type: multipart/form-data
        const imageResponse = await imageClient.post('', formData);
        const imageUrl = imageResponse.data.url;

        setPreviewUrl(imageUrl);
        onDataChange('thumbnail', imageUrl);
    };

    return (
        <StyledPreview>
            <h2>포스트 미리보기</h2>
            <input type='file' onChange={handleImgChange} />
            {previewUrl && (
                <StyledPreviewImg>
                    <img src={previewUrl} alt='' />
                </StyledPreviewImg>
            )}
            <StyledSummary>
                <textarea
                    placeholder='당신의 포스트를 짧게 소개해보세요...'
                    value={summary}
                    onChange={handleChange}
                ></textarea>
                <StyledLength limit={summary.length === 150}>
                    {summary.length || '0'} / <span>150</span>
                </StyledLength>
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

const StyledPreviewImg = styled.div`
    margin-top: 1rem;
    & > img {
        width: 100%;
        height: 20rem;
    }
`;

const StyledSummary = styled.div`
    width: 100%;
    position: relative;
    padding: 20px 0 10px 0;

    & > textarea {
        border: 0;
        outline: 0;
        resize: none;
        height: 100px;
        width: 100%;
        box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
    }
`;

const StyledLength = styled.div`
    position: absolute;
    bottom: -10px;
    right: 0;
    font-size: 0.7rem;
    color: rgb(133, 133, 133);
`;
