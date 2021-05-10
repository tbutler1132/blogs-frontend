import React from 'react';
import {Link} from 'react-router-dom'

import PostsContainer from './PostsContainer'

function Profile(props) {
    return (
        <div>
            <div className="profile-header">
                <h1>{props.currentUser.username}</h1>
                <h3>Blog Logo</h3>
                <Link to="/posts/new" style={{ textDecoration: 'none', color: "red" }} className="new-btn">
                    
                        <span>
                            Add
                        </span>
       
                </Link>
            </div>
            <hr></hr>
            <PostsContainer currentUser={props.currentUser}/>
        </div>
    );
}

export default Profile;