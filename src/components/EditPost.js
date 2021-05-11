import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'

import TagsInput from './TagsInput'

function EditPost(props) {

    const [title, setTitle] = useState(props.postObj.title)
    const [content, setContent] = useState(props.postObj.content)
    const [tags, setTags] = useState(props.postObj.tags)


    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    const contentHandler = (e) => {
        setContent(e.target.value)
    }

    const tagHandler = (tagArray) => {
        setTags(tagArray)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const updatedPost = {
            id: props.postObj._id,
            title: title,
            content: content,
            tags: tags
        }
        fetch(`http://localhost:5000/users/edit/posts/${props.currentUser._id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              },
              body: JSON.stringify(updatedPost)
            })
            .then(r => r.json())
            .then(data => {
                props.editPost(data)
                props.history.push("/profile")
                }
                )
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={title} onChange={titleHandler}/><br></br>
                <textarea type="text" cols="50" rows="50" value={content} onChange={contentHandler}/><br></br>
                <TagsInput tags={tags} tagHandler={tagHandler}/>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default withRouter(EditPost);