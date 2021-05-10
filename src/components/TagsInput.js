import React, {useState} from 'react';

function TagsInput(props) {

    const [tag, setTag] = useState("")

    const tagHandler = (e) => {
        setTag(e.target.value)
    }

    const inputKeyDown = (e) => {
        let val = e.target.value
        if (e.code === "Space" && val){
            props.tagHandler([...props.tags, val])
            setTag("")
        }
        if (props.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
            return;
          }
    }

    const removeTag = (i) => {
        const newTags = [...props.tags]
        newTags.splice(i, 1)
        props.tagHandler(newTags)
    }

    return (
        <div className="input-tag">
            <ul className="input-tag__tags">

                {props.tags.map((tag, i) => (
                    <li key={tag}>
                        {tag}
                        <button type ="button" onClick={() => { removeTag(i) }}>+</button>
                    </li>
                ))}

                <li className="input-tag__tags__input">
                    <input onChange={tagHandler} value={tag} type="text" onKeyDown={inputKeyDown} />
                </li>

            </ul>
        </div>
    );
}

export default TagsInput;