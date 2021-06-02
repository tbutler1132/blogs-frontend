import React from 'react';

function UserInfo(props) {
    console.log(props.currentUser)
    return (
        <div className="user-info">
            <h1>{props.currentUser.username}</h1>
            <p>Total Posts: {props.currentUser.posts.length}</p>
            <p>Joined: {props.currentUser.createdAt}</p>
        </div>
    );
}

export default UserInfo;