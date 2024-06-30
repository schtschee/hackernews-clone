import * as React from 'react';
import { useEffect, useState } from 'react';
import { fetchComment } from '../api/hackerNewsApi';

interface CommentProps {
    id: number;
}

const Comment: React.FC<CommentProps> = ({ id }) => {
    const [comment, setComment] = useState<any>(null);

    useEffect(() => {
        const loadComment = async () => {
            const data = await fetchComment(id);
            setComment(data);
        };

        loadComment();
    }, [id]);

    if (!comment) {
        return <div>Loading...</div>;
    }

    return (
        <div className="comment">
            <div>
                <strong>{comment.by}</strong> | Score: {comment.score}
            </div>
            <div dangerouslySetInnerHTML={{ __html: comment.text }} />
            <div>
                {comment.kids && comment.kids.map((kid: number) => (
                    <Comment key={kid} id={kid} />
                ))}
            </div>
        </div>
    );
};

export default Comment;
