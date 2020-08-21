import React from 'react';
import ViewPost from './ViewPost';
import './styles.css';


const PostDetails = (props) => {
    const { post, comments, userDetails, viewComment } = props.location.state;
    return (
        <div>
            <div className="posts">
                <div className="postDetailsContainer">
                    <ViewPost 
                        post={post} 
                        comments={comments} 
                        userDetails={userDetails} 
                        viewComment={viewComment} 
                    />
                </div>
            </div>    
        </div>
    );
}

export default PostDetails;