import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'

function Post(props) {
    console.log("ass")
    return (
        <div>
            <Switch>

                <Route path="profile/posts/:id" render={() => 
                {
                    return(
                        <div>
                            <h3>{props.postObj.title}</h3>
                            <p>{props.postObj.content}</p>
                            <p>Hi</p>
                        </div>
                    )
                }
                }/> 

                <Route path="/profile" render={() =>
                {
                    return ( 
                        <div>
                            <Link to={`profile/posts/${props.postObj._id}`} >
                                <h3>{props.postObj.title}</h3>
                            </Link>
                        </div>
                    )
                }    
                }/>

            </Switch>
        </div>
    );
}

export default Post;