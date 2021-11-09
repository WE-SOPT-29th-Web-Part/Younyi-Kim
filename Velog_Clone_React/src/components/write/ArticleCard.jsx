import React from "react";

const ArticleCard = ({ article }) => {
    console.log(`article`, article);

    const { id, title, body, summary, series, tags, thumbnail, date } = article;

    return (
        <div>
            <img src={thumbnail} />
            <h3>{title}</h3>
            <h4>{summary}</h4>
            {tags.map((tag) => (
                <span key={tag}>{tag}</span>
            ))}
            <div>{date}</div>
        </div>
    );
};

export default ArticleCard;
