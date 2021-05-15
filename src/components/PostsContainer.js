import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'

import Post from './Post'

function PostsContainer(props) {

    const renderPosts = () => {
        return props.currentUser.posts.reverse().map(post =>
            <> 
            <Post editPost={props.editPost} key={post._id} postObj={post}/>
            <hr></hr>
            </>
            
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
                    <div>
                        {renderPosts()}
                    </div>
                
                } />


            </Switch>
        </div>
    );
}

export default withRouter(PostsContainer);