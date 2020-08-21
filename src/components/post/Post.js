import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import ViewPost from './ViewPost';


const Post = (props) => {
    const history = useHistory();
    const { userDetails, comments, post } = props;
    const data = {
        post, 
        comments,
        userDetails,
        viewComment: true
    }
    return(
        <div className="post" onClick={() => history.push({pathname: `/post/${props.post.id}`, state: data})}>
            <ViewPost 
                post={post} 
                comments={comments} 
                userDetails={userDetails} 
                viewComment={false} 
            />
        </div>
    );
}

export default Post;