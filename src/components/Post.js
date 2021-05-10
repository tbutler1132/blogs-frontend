import React from 'react';
import {Switch, Route, Link, withRouter} from 'react-router-dom'

function Post(props) {

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
                        <div className="blog-post">
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
                        <div className="blog-post-profile">
                            <Link to={`profile/${props.postObj._id}`} style={{ textDecoration: 'none' }}>
                                <h1>{props.postObj.title}</h1>
                            </Link>
                                {renderPostPreview()}
                        </div>
                    )
                }    
                }/>

            </Switch>
        </div>
    );
}

export default withRouter(Post);