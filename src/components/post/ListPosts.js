import React from 'react';
import Post from './Post';
import './styles.css';

class ListPosts extends React.Component {
    state = {
        posts: [],
        users: {},
        comments: {}
    }
    getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(result => this.setState({ posts: result }));
    }

    getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(result => {
            const usersObject = {};
            result.forEach(user => {
                usersObject[user.id] = user;
            });
            this.setState({ users: usersObject });
        });
    }

    getComments = () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(result => {
            const commentsObject = {};
            result.forEach(comment => {
                if (commentsObject[comment.postId]) {
                    commentsObject[comment.postId].push(comment);
                } else {
                    commentsObject[comment.postId] = [comment];
                }
            });
            this.setState({ comments: commentsObject });
        });
    }

    componentDidMount() {
        this.getPosts();
        this.getUsers();
        this.getComments();
    }

    render(){
        return(
            <div>
                <div className="posts">
                    <div className="postsContainer">
                        {this.state.posts.map(post => {
                            const userDetails = this.state.users[post.userId];
                            const comments = this.state.comments[post.id];
                            return (userDetails && <Post key={post.id} post={post} userDetails={userDetails} comments={comments} />)
                        })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ListPosts;