import React, { useState } from "react";
import ArticleTitle from "../components/write/ArticleTitle";
import ArticleTags from "../components/write/ArticleTags";
import ArticleBody from "../components/write/ArticleBody";
import ArticleFooter from "../components/write/ArticleFooter";

const Write = () => {
    const [articleData, setArticleData] = useState({
        id: "",
        title: "",
        body: "",
        summary: "",
        series: "",
        tags: [],
        thumbnail: "",
        data: "",
    });
    return (
        <div>
            <ArticleTitle />
            <ArticleTags />
            <ArticleBody />
            <ArticleFooter />
        </div>
    );
};

export default Write;
