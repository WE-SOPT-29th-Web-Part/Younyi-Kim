import React, { useEffect, useState } from "react";
import { client } from "../../libs/api";
import axios from "axios";
import ArticleCard from "../write/ArticleCard";

const ArticlesContainer = () => {
    // Data 받기 - axios / async, await

    const [articledData, setArticleData] = useState([]);

    const getArticleData = async () => {
        const { data } = await client.get("/article");
        setArticleData(data);
    };

    // http://localhost:4000/article => 다회 통신

    useEffect(() => {
        getArticleData();
    }, []);

    // map : array의 method
    return (
        <div>
            {articledData.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
};

export default ArticlesContainer;
