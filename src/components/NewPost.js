import React, { useRef, useState } from "react"
import {PostContext} from '../App';

const NewPost = ({ username }) => {
    const dispatch = React.useContext(PostContext);

    const [content, setContent] = React.useState()
    const image = React.useRef()

    const handleChangeMessage = ({ target: { value } }) => {
        setContent(value)
    }

    const handleClickNewPost = () => {
        setPosts([{
            content: content,
            image: image.current.files[0],
            username: username,
            likes: 0,
            date: new Date()
        }, ...posts])

        dispatch({type:"CRIAR_POST", payload: NewPost})

        setContent("");
        image.current.value = "";
    }

    return (
        <div>
            <input value={content} type="text" placeholder="O que você está pensando?" onChange={handleChangeMessage} />
            <input type="file" ref={image} />
            <button onClick={handleClickNewPost}>Post</button>
        </div>
    )
}

export default NewPost