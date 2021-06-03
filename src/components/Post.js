import React, {useState} from 'react';
import {Switch, Route, Link, withRouter} from 'react-router-dom'

import EditPost from './EditPost'

function Post(props) {

    const [editing, toggleEditForm] = useState(false)

    const renderPostPreview = () => {
        if (props.postObj.content.length > 200){
            return <p>{props.postObj.content.slice(0, 200)}...</p>
        } else {
            return <p>{props.postObj.content}</p>
        }
    }

    return (
        <div>
            <Switch>

                <Route path="/profile/:id" render={() => 
                {
                    return(
                        <>
                        {!editing ? 
                        <div className="blog-post">
                            <h1>{props.postObj.title}</h1>
                            <p>{props.postObj.content}</p>
                            <hr></hr>
                            <div className="tags">
                                {props.postObj.tags.map(tag => <p id="tag" key={tag}>#{tag}</p>)}
                            </div>
                            <button onClick={() => toggleEditForm(true)}>Edit blog</button>
                            <button>Delete blog</button>
                        </div>
                        :
                        <EditPost toggleEdit={toggleEditForm} editPost={props.editPost} currentUser={props.currentUser} postObj={props.postObj}/>
                        }
                        </>
                    )
                }
                }/> 

                <Route path="/profile" render={() =>
                {
                    return ( 
                        <div className="blog-post-profile">
                            <Link to={`profile/${props.postObj._id}`} style={{ textDecoration: 'none' }}>
                                <h1>{props.postObj.title}</h1>
                            </Link>
                            <p>Date goes here...</p>
                                {renderPostPreview()}
                                <div className="tags">
                                {props.postObj.tags.map(tag => <p id="tag" key={tag}>#{tag}</p>)}
                            </div>
                        </div>
                    )
                }    
                }/>

            </Switch>
        </div>
    );
}

export default withRouter(Post);