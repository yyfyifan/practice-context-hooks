import React, { useContext, useState, createContext } from 'react'
import { v4 as uuid } from 'uuid';

// shiyon
export const BookContext = createContext();

export const BookContextProvider = (props) => {

    const [books, setBooks] = useState([
        { title: 'Journey to the West', id: 0 },
        { title: 'Journey to the West', id: 1 },
        { title: 'Journey to the West', id: 2 },
    ])

    const addBook = title => {
        setBooks([...books, { title, id: uuid() }])
    }

    return (
        <BookContext.Provider value={{ books, addBook }}>
            {props.children}
        </BookContext.Provider>
    )
}
