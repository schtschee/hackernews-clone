import React from 'react';
import { Link } from 'react-router-dom';

interface NewsItemProps {
    id: number;
    title: string;
    url: string;
    score: number;
    by: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ id, title, url, score, by }) => {
    return (
        <div className="news-item">
            <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
            <div>
                <span>Score: {score}</span> | <span>By: {by}</span> | <Link to={`/news/${id}`}>Comments</Link>
            </div>
        </div>
    );
};

export default NewsItem;
