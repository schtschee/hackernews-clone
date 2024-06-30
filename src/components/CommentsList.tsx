import * as React from 'react';
import Comment from './Comment';

interface CommentsListProps {
    kids: number[];
}

const CommentsList: React.FC<CommentsListProps> = ({ kids }) => {
    return (
        <div>
            {kids.map(id => (
                <Comment key={id} id={id} />
            ))}
        </div>
    );
};

export default CommentsList;
