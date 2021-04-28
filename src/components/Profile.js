import React from 'react';

import PostsContainer from './PostsContainer'

function Profile(props) {
    return (
        <div>
            <h1>{props.currentUser.username}'s profile</h1>
            <button>Create new blog</button>
            <PostsContainer currentUser={props.currentUser}/>
        </div>
    );
}

export default Profile;