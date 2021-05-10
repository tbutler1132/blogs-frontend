import React, {useState} from 'react';

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

export default EditPost;