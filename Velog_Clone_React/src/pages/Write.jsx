import React, { useState } from 'react';
import ArticleTitle from '../components/write/ArticleTitle';
import ArticleTags from '../components/write/ArticleTags';
import ArticleBody from '../components/write/ArticleBody';
import ArticleFooter from '../components/write/ArticleFooter';
import Publish from '../components/write/publishScreen/Publish';
import { client } from '../libs/api';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router';

const Write = () => {
    const navigate = useNavigate(); // v6에서 useHistory => useNavigate로 변경
    const location = useLocation(); // location객체를 대신하는 react-router-dom hook (path name이 출력 ex. /write)
    const article = location.state; // 글 수정의 경우, location.state에 값이 들어있고, 새글 작성인 경우 null

    const [articleData, setArticleData] = useState(
        // atricle이 null(or undefined)가 아닌 경우 article의 내용을 articleData에 담는다.
        // 새글 작성인 경우(즉 article이 null) 빈 문자열을 할당한다.
        article ?? {
            title: '',
            body: '',
            summary: '',
            tags: [],
            thumbnail: '',
        }
    );

    const [isPublishScreen, setIsPublishScreen] = useState(false);

    const createArticle = async () => {
        // 기존의 글을 수정하는 경우
        // baseURL = http://localhost:5000/api
        // PATCH /api/article/[Article 아이디]
        if (article) {
            await client.patch(`article/${article.id}`, articleData);
            navigate(`/article/${article.id}`, { state: articleData });
            return;
        }

        // 새글 작성인 경우
        //POST /api/article
        await client.post(`/article`, articleData);
        navigate('/');
    };

    // title, body, summary, series, thumbnail의 변화에 적용
    // 각 컴포넌트에 props로 setArticleData를 내려주는 것은 바람직하지 못하다.
    // 이유는, 하위 컴포넌트에서 setArticleData를 직접 사용하여 state를 수정하는 경우, 어디에서 변화가 발생한 것인지 관리하기 어려운 문제 존재.
    const handleDataChange = (key, value) => {
        const tempArticleData = { ...articleData }; // 불변성 유지를 위해 상태 복사 (상태 불변성)
        tempArticleData[key] = value;
        setArticleData(tempArticleData);
    };

    // 배열 수정 함수(ex tags)
    const handleArrDataChange = (key, value) => {
        const tempArticleData = { ...articleData }; // 불변성 유지를 위해 상태 복사 (상태 불변성)
        tempArticleData[key] = [...tempArticleData[key], value];
        setArticleData(tempArticleData);
    };

    // 클릭 시, 태그 삭제 함수
    const handleArrDataRemove = (key, value) => {
        const tempArticleData = { ...articleData }; // 불변성 유지를 위해 상태 복사 (상태 불변성)
        tempArticleData[key] = tempArticleData[key].filter(
            (el) => el !== value
        );
        setArticleData(tempArticleData);
    };

    return (
        <StyledWriteWrapper>
            <ArticleTitle
                title={articleData.title}
                onDataChange={handleDataChange}
            />
            <ArticleTags
                tags={articleData.tags}
                onArrDataChange={handleArrDataChange}
                onArrDataRemove={handleArrDataRemove}
            />
            <ArticleBody
                body={articleData.body}
                onDataChange={handleDataChange}
            />
            <ArticleFooter setIsPublishScreen={setIsPublishScreen} />
            <Publish
                summary={articleData.summary}
                onDataChange={handleDataChange}
                createArticle={createArticle}
                isPublishScreen={isPublishScreen}
                setIsPublishScreen={setIsPublishScreen}
            />
        </StyledWriteWrapper>
    );
};

export default Write;

const StyledWriteWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    background: #fff;
`;
