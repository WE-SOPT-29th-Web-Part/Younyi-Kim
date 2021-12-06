import { useNavigate } from 'react-router';
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
        <div>
            <button>통계</button>
            <button onClick={handleNavigateEdit}>수정</button>
            <button onClick={handleArticleDelete}>삭제</button>
        </div>
    );
};

export default ArticleOptions;
