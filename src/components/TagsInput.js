import React, {useState} from 'react';

function TagsInput(props) {

    const [tags, setTags] = useState([])

    const inputKeyDown = (e) => {
        const val = e.target.value
        if (e.key === "Enter" && val){
            setTags([...tags, val])
        }
        if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
            return;
          }
    }

    const removeTag = (i) => {
        const newTags = [...tags]
        newTags.splice(i, 1)
        setTags(newTags)
    }

    return (
        <div className="input-tag">
            <ul className="input-tag__tags">

                {tags.map((tag, i) => (
                    <li key={tag}>
                        {tag}
                        <button type ="button" onClick={() => { removeTag(i) }}>+</button>
                    </li>
                ))}

                <li className="input-tag__tags__input">
                    <input type="text" onKeyDown={inputKeyDown} />
                </li>

            </ul>
        </div>
    );
}

export default TagsInput;