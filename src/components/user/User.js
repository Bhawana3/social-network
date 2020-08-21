import React from 'react';
import './styles.css';

 const User = (props) => {
    const { user } = props;  
    return (
        <div className="userContainer">
            <div className="userDetails">
                <label>Name: </label>
                <p>{user.name}</p>
                <label>Email: </label>
                <p>{user.email}</p>
                <label>Phone: </label>
                <p>{user.phone}</p>
                <label>Website: </label>
                <p>{user.website}</p>
            </div>
        </div>
    )
}

export default User;