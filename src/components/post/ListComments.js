import React from 'react';
import './styles.css';

const ListComments = (props) => {
    const { comments } = props;
    return (
        <div className="commentsList">
            {comments && comments.map(comment => (
                <div className="comment" key={comment.id}>
                    <p style={{ fontWeight: '600',color: '#3c464e' }}>{comment.name}</p>
                    <p style={{ color: '#0274bc',fontWeight: '600', textTransform: 'lowercase' }}>{comment.email}</p>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    )
}

export default ListComments;