import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import TagsInput from './TagsInput'

function NewBlog(props) {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tags, setTags] = useState([])


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
        // const newPosts = [...props.currentUser.posts]

        // newPosts.push({
        //     title: title,
        //     content: content
        // })

        const newPost = {
            title: title,
            content: content,
            tags: tags
        }
        fetch(`http://localhost:5000/users/new/posts/${props.currentUser._id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              },
              body: JSON.stringify(newPost)
            })
            .then(r => r.json())
            .then(data => {
                props.addPost(data)
                props.history.push('/profile')
            })
    }


    return (
        <div className="new-blog-form">
            <form onSubmit={submitHandler}>
                <div className="new-blog-title">
                    <input id="title-input" placeholder="Title" type="text" value={title} onChange={titleHandler}/><br></br>
                </div>
                <div className="new-blog-body">
                    <textarea type="text" cols="50" rows="50" value={content} onChange={contentHandler}/><br></br>
                </div>
                <TagsInput tags={tags} tagHandler={tagHandler}/>
                <div className="submit-blog-button">
                    <Button type="submit">submit</Button>
                </div>
            </form>
        </div>
    );
}

export default withRouter(NewBlog);