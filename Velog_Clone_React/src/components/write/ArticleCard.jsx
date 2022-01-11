import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImgWrapper from '../common/ImgWrapper';

const ArticleCard = ({ article }) => {
    const { title, summary, tags, thumbnail, date } = article;

    return (
        <>
            <StyledCard>
                <Link to={`article/${article.id}`} state={article}>
                    {thumbnail && (
                        <ImgWrapper ratio='56%'>
                            <img src={thumbnail} alt='thumbnail' />
                        </ImgWrapper>
                    )}
                </Link>
                <StyledLink to={`article/${article.id}`} state={article}>
                    <div>
                        <h3>{title}</h3>
                        <h4>{summary}</h4>
                        {tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                        <div>{date}</div>
                    </div>
                </StyledLink>
            </StyledCard>
        </>
    );
};

export default ArticleCard;

const StyledLink = styled(Link)`
    text-decoration: none;
`;
const StyledCard = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 2rem;
    margin-top: 4rem;
    font-family: 'Roboto', sans-serif;
    border-bottom: 1px solid rgb(233, 236, 239);

    div {
        font-size: 0.875rem;
        margin-top: 10px;
        color: rgb(73, 80, 87);
        line-height: 20px;

        h3 {
            color: black;
            font-size: 15px;
            font-weight: bold;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        h4 {
            margin-bottom: 10px;
        }

        div {
            font-size: 0.75rem;
            color: rgb(134, 142, 150);
            margin-top: 16px;
        }
        span {
            padding-left: 1rem;
            padding-right: 1rem;
            height: 1.5rem;
            border-radius: 0.75rem;
            font-size: 0.75rem;
            display: inline-flex;
            align-items: center;
            background: rgb(241, 243, 245);
            color: rgb(12, 166, 120);
        }

        span + span {
            margin-left: 15px;
        }
    }
`;

const StyledImageWrapper = styled.div`
    position: relative;
    padding-top: 52.1921%;
    margin-bottom: 16px;

    & > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
