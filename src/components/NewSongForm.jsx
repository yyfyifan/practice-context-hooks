import React, { useState } from 'react'


const NewSongForm = (props) => {

    const [title, setTitle] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();

        props.addSong(title);
        setTitle('');
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label>Song name:</label>
            <input type="text" required value={title} onChange={handleTitleChange} />
            <input type="submit" value="add song" />
        </form>
    )
}

export default NewSongForm;