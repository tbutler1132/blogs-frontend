import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import Post from './Post'

function PostsContainer(props) {

    const renderPosts = () => {
        return props.currentUser.posts.reverse().map(post =>
            <div className="blog-post-container"> 
            <Post editPost={props.editPost} key={post._id} postObj={post}/>
            </div>
            
        )
    }

    return (
        <div>
            <Switch>
                <Route path="/profile/:id" render={({match}) => {
                    const id = match.params.id
                    const foundPost = props.currentUser.posts.find((post) => post._id === id)
                    return <Post editPost={props.editPost} postObj={foundPost} currentUser={props.currentUser}/>
                }}/>

                <Route path="/profile" render={() => 
                    <Container className="blogs-container">
                        {renderPosts()}
                    </Container>
                
                } />


            </Switch>
        </div>
    );
}

export default withRouter(PostsContainer);