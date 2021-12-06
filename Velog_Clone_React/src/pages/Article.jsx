import { useLocation } from 'react-router';
import ArticleOptions from '../components/write/ArticleOptions';
import { StyledArticleTags } from '../components/write/ArticleTags';
import ImgWrapper from '../components/common/ImgWrapper';
import styled from 'styled-components';

const Article = () => {
    const location = useLocation();
    const article = location.state;
    const { id, title, body, thumbnail, date, tags } = article;
    return (
        <StyledArticleWrapper>
            <h1>{title}</h1>
            <StyledHeader>
                <StyledWriteInfo>
                    <span>김연이</span>
                    <span>·</span>
                    <span>{date}</span>
                </StyledWriteInfo>
                <div>
                    <ArticleOptions id={id} article={article} />
                </div>
            </StyledHeader>
            <StyledArticleTags>
                {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </StyledArticleTags>
            {thumbnail && (
                <ImgWrapper ratio='50%'>
                    <img src={thumbnail} alt='thumbnail' />
                </ImgWrapper>
            )}
            <div>{body}</div>
        </StyledArticleWrapper>
    );
};

export default Article;

const StyledArticleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    width: calc(100% - 20rem);
    margin: 4rem auto;

    & > h1 {
        font-size: 3rem;
        font-weight: bolder;
    }
`;
const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
`;

const StyledWriteInfo = styled.div`
    display: flex;
    justify-content: center;

    & > span:last-child {
        color: grey;
    }
`;
