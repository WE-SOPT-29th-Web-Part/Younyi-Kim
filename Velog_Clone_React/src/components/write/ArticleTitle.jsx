import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleTitle = ({ setArticleData }) => {
    // textarea의 value가 변할 때 articleData.title를 변경
    const handleChange = (e) => {
        setArticleData((articleData) => ({
            ...articleData, // spread 연산자 각각의 프로퍼티를 펼쳐줌. (id, body, title 등등)
            title: e.target.value,
        }));
    };
    return (
        <textarea
            placeholder="제목을 입력하세요."
            onChange={handleChange}
        ></textarea>
    );
};

export default ArticleTitle;
