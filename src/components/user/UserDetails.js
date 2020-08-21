import React from 'react';
import User from './User';

const UserDetails = (props) => {
    const {userDetails} = props.location.state;
    return (
        <div>
            <User user={userDetails} />
        </div>
    )
}

export default UserDetails;