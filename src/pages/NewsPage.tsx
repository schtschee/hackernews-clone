import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchStory } from '../api/hackerNewsApi';
import CommentsList from '../components/CommentsList';

const NewsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [story, setStory] = useState<any>(null);

    useEffect(() => {
        const loadStory = async () => {
            const data = await fetchStory(Number(id));
            setStory(data);
        };

        loadStory();
    }, [id]);

    if (!story) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{story.title}</h1>
            <div>
                <a href={story.url} target="_blank" rel="noopener noreferrer">{story.url}</a>
            </div>
            <div>By: {story.by}</div>
            <div>Score: {story.score}</div>
            {story.kids && <CommentsList kids={story.kids} />}
        </div>
    );
};

export default NewsPage;
