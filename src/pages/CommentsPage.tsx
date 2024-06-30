import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchStory } from '../api/hackerNewsApi';
import CommentsList from '../components/CommentsList';

const CommentsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [story, setStory] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadStory = async () => {
            try {
                setLoading(true);
                const data = await fetchStory(Number(id));
                setStory(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load story');
                setLoading(false);
            }
        };

        loadStory();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!story) {
        return <div>Story not found</div>;
    }

    return (
        <div>
            <h1>{story.title}</h1>
            <div>
                <a href={story.url} target="_blank" rel="noopener noreferrer">{story.url}</a>
            </div>
            <div>By: {story.by}</div>
            <div>Score: {story.score}</div>
            <h2>Комментарии:</h2>
            {story.kids && story.kids.length > 0 ? (
                <CommentsList kids={story.kids} />
            ) : (
                <div>No comments yet</div>
            )}
        </div>
    );
};

export default CommentsPage;
