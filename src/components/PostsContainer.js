import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'

import Post from './Post'

function PostsContainer(props) {

    const renderPosts = () => {
        return props.currentUser.posts.map(post => <Post key={post._id} postObj={post}/>)
    }

    return (
        <div>
            <Switch>
                <Route path="/profile/:id" render={({match}) => {
                    const id = match.params.id
                    const foundPost = props.currentUser.posts.find((post) => post._id === id)
                    return <Post postObj={foundPost} currentUser={props.currentUser}/>
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