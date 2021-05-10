import React from 'react';
import {Link} from 'react-router-dom'

import PostsContainer from './PostsContainer'

function Profile(props) {
    return (
        <div>
            <div className="profile-header">
                <h1>{props.currentUser.username}'s profile</h1>
                <Link to="/posts/new">Create new blog</Link>
            </div>
            <PostsContainer currentUser={props.currentUser}/>
        </div>
    );
}

export default Profile;