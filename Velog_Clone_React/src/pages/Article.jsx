import { useLocation } from 'react-router';
import ArticleOptions from '../components/write/ArticleOptions';
import { StyledArticleTags } from '../components/write/ArticleTags';
import ImgWrapper from '../components/common/ImgWrapper';

const Article = () => {
    const location = useLocation();
    const article = location.state;
    const { id, title, body, thumbnail, date, tags } = article;
    return (
        <div>
            <h1>{title}</h1>
            <ArticleOptions id={id} article={article} />
            <div>
                <span>김연이</span>
                <span>·</span>
                <span>{date}</span>
            </div>
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
        </div>
    );
};

export default Article;
