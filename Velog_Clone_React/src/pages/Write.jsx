import React, { useEffect, useState } from "react";
import ArticleTitle from "../components/write/ArticleTitle";
import ArticleTags from "../components/write/ArticleTags";
import ArticleBody from "../components/write/ArticleBody";
import ArticleFooter from "../components/write/ArticleFooter";
import { client } from "../libs/api";

const Write = () => {
    const [articleData, setArticleData] = useState({
        id: "", // 과제(articleData.length + 1 해주면 됨)
        title: "",
        body: "",
        summary: "", // 과제
        series: "",
        tags: [],
        thumbnail: "", // => 사진 업로드 다음 시간에
        data: "", // 과제(오늘 날짜 찍어주기)
    });

    useEffect(() => {
        console.log(`articleData`, articleData);
    }, [articleData]);

    const createArticle = async () => {
        const { data } = await client.get("/article");
        const id = data.length + 1;
        const now = new Date();
        const date = `${now.getFullYear()}년 ${
            now.getMonth() + 1
        }월 ${now.getDate()}일`;

        await client.post("/article", {
            ...articleData,
            id,
            date,
            summary: "요약입니다.",
        });
    };

    const handlePost = async () => {
        await createArticle();
    };

    return (
        <div>
            <button onClick={handlePost}>POST</button>
            <ArticleTitle setArticleData={setArticleData} />
            <ArticleTags
                articleData={articleData}
                tags={articleData.tags}
                setArticleData={setArticleData}
            />
            <ArticleBody setArticleData={setArticleData} />
            <ArticleFooter />
        </div>
    );
};

export default Write;
