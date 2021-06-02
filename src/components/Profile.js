import React from 'react';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import blogLogo from '../assets/501b0742e7904c9c9d71f9e5114a705c.png'

import PostsContainer from './PostsContainer'
import UserInfo from './UserInfo'

function Profile(props) {
    return (
        <div>
            <div className="profile-header">
                {/* <h1 onClick={() => props.history.push('/profile')} style={{cursor: "pointer"}}>User: {props.currentUser.username}</h1> */}
                <img src={blogLogo} alt="" height="10%" width="10%"/>
                <Link to="/posts/new" style={{ textDecoration: 'none', color: "red" }} className="new-btn">
                    
                        <Button>
                            Add blog
                        </Button>
       
                </Link>
            </div>
            <hr></hr>
            <div className="main-profile">
                <div className="user-info-main">
                    <UserInfo currentUser={props.currentUser}/>
                </div>
                <div className="posts-container-main">
                    <PostsContainer editPost={props.editPost} currentUser={props.currentUser}/>
                </div>
            </div>
        </div>
    );
}

export default Profile;