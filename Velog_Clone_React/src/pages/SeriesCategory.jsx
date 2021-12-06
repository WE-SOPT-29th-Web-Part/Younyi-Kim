import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { client } from '../libs/api';
import ReactMarkdown from 'react-markdown';

const SeriesCategory = () => {
    // Data 받아오기
    const [seriesData, setSeriesData] = useState([]);

    const getSeriesData = async () => {
        const { data } = await client.get('/series');
        setSeriesData(data);
        console.log(`data`, data);
    };

    useEffect(() => {
        getSeriesData();
    }, []);

    return (
        <StyledRoot>
            <ReactMarkdown> # Heading</ReactMarkdown>
        </StyledRoot>
    );
};

export default SeriesCategory;

const StyledRoot = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
`;
