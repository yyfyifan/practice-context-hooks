import React, { useState, useReducer, createContext } from 'react'
import bookReducer from '../reducers/bookReducer';

export const BookContext = createContext();

export const BookContextProvider = (props) => {

    // 使用reducer dispatch的方式来处理
    const [books, bookDispatch] = useReducer( bookReducer, [
        { title: 'hello', author: 'caoxueqing', id: 0 }
    ]);

    // const [books, setBooks] = useState([
    //     { title: 'hello', author: 'caoxueqing', id: 0 }
    // ])

    // const addBook = ({ title, author }) => {
    //     setBooks([...books, { title: title, author: author, id: uuid() }])
    // }

    // const deleteBook = id => {
    //     setBooks(books.filter(book => book.id !== id))
    // }

    return (
        <BookContext.Provider value={{ books, bookDispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}
