import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { client } from '../../libs/api';

const ArticleOptions = ({ id, article }) => {
    const navigate = useNavigate();

    const handleArticleDelete = async () => {
        await client.delete(`article/${id}`);
        navigate('/');
    };

    const handleNavigateEdit = () => {
        navigate(`/article/edit/${article.id}`, { state: article });
    };

    return (
        <StyledOptionWrapper>
            <button>통계</button>
            <button onClick={handleNavigateEdit}>수정</button>
            <button onClick={handleArticleDelete}>삭제</button>
        </StyledOptionWrapper>
    );
};

export default ArticleOptions;

const StyledOptionWrapper = styled.div`
    & > button {
        border: 0;
        outline: 0;
        background-color: transparent;
        font-size: 1rem;
        text-align: center;
        line-height: 1rem;
        color: grey;
        cursor: pointer;
    }

    & > button:hover {
        color: black;
    }
`;
