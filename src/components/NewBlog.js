import React, {useState} from 'react';

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
            .then(data => console.log(data))
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Title</label>
                <input type="text" value={title} onChange={titleHandler}/><br></br>
                <label>Body</label>
                <textarea type="text" cols="50" rows="50" value={content} onChange={contentHandler}/><br></br>
                <TagsInput tags={tags} tagHandler={tagHandler}/>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default NewBlog;