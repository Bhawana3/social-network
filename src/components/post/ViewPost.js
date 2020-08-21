import React from 'react';
import { Link } from 'react-router-dom';
import ListComments from './ListComments';
import './styles.css';

const ViewPost = (props) => {
    const { post, comments, userDetails, viewComment } = props;
    const { id, username } = userDetails;
    return (
        <div>
            <div className="postDetails">
                <span className="userIcon">&#128100;</span>
                <div>
                    <Link style={{fontWeight: 700,color: 'black', textDecoration: 'none', fontSize: '20px'}} 
                        to={{ 
                            pathname:`/user/${id}`, 
                            state:{userDetails} 
                        }}>
                    {username}
                    </Link>
                    <p style={{ color: '#3e3d3d' }}>{post.title}</p>
                </div>
            </div>
            <div className="comments">
                <div style={{ textAlign: 'left', fontSize: '14px' }}>
                    &#128172; &nbsp;&nbsp;<span style={{ fontSize: 'small',color: '#6D7E8C'}}>{comments && comments.length} </span>
                </div>
                {viewComment && <ListComments comments={comments} />}
            </div>
        </div>
    );
}

export default ViewPost;