import React from 'react';
import {Switch, Route, Link, withRouter} from 'react-router-dom'

function Post(props) {

    return (
        <div>
            <Switch>

                <Route path="/profile/:id" render={() => 
                {
                    return(
                        <div>
                            <h3>{props.postObj.title}</h3>
                            <p>{props.postObj.content}</p>
                            {props.postObj.tags.map(tag => <p key={tag}>{tag}</p>)}
                            <button>Edit blog</button>
                        </div>
                    )
                }
                }/> 

                <Route path="/profile" render={() =>
                {
                    return ( 
                        <div>
                            <Link to={`profile/${props.postObj._id}`} style={{ textDecoration: 'none' }}>
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

export default withRouter(Post);