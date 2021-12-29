import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

// import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({ category }) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === "all" ? "" : `&category=${category}`;
                const URL = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=3c2d9c10238142d2a35732f809526641`;
                const responce = await axios.get(URL);
                setArticles(responce.data.articles);
                console.log(URL);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);

    // 대기중일 때
    if (loading) {
        return <NewsListBlock>대기중...</NewsListBlock>;
    }
    // 아직 response 값이 설정되지 않았을 때
    if (!articles) {
        return null;
    }

    // response 값이 유효할 때
    // const { articles } = response.data;
    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
