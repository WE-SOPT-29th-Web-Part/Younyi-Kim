import React from "react";

const ArticleTags = ({ tags, articleData, setArticleData }) => {
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            const tempData = { ...articleData };

            tempData.tags = [...tempData.tags, e.target.value];
            setArticleData(tempData);

            e.target.value = "";
        }
    };
    return (
        <div>
            {tags.map((tag) => (
                <span key={tag}>{tag}</span>
            ))}
            <input type="text" onKeyPress={handleKeyPress} />
        </div>
    );
};

export default ArticleTags;
