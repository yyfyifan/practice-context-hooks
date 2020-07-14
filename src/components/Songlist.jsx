import React, { useState, useEffect } from 'react'
import NewSongForm from './NewSongForm';
import { v4 as uuid } from 'uuid';

const SongList = (props) => {

    // 传入初始值来创建state
    const [songs, setSongs] = useState([
        { title: 'love the way you lie', id: 1 },
        { title: 'empire state of new york', id: 2 },
        { title: 'yeah', id: 3 },
    ])

    const addSong = (title) => {
        setSongs([...songs, {title, id: uuid()}])
    }

    // 第二个参数代表希望哪个state改变时才运行
    useEffect(() => {

    }, [songs]);

    return (
        <div className="song-list">
            <ul>
                {songs.map(song => <li key={song.id}>{song.title}</li>)}
            </ul>
            <NewSongForm addSong={addSong} />
        </div>
    )
}


export default SongList;