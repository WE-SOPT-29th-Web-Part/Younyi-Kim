import React from "react";

const ArticleBody = ({ setArticleData }) => {
    const handleChange = (e) => {
        setArticleData((articleData) => ({
            ...articleData, // spread 연산자 각각의 프로퍼티를 펼쳐줌. (id, body, title 등등)
            body: e.target.value,
        }));
    };
    return <textarea onChange={handleChange}></textarea>;
};

export default ArticleBody;
