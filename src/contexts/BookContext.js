import React, { useEffect, useReducer, createContext } from 'react'
import bookReducer from '../reducers/bookReducer';

export const BookContext = createContext();

export const BookContextProvider = (props) => {

    // 使用reducer dispatch的方式来处理
    // 使用第三个参数，传递一个函数来获取初始值，这样可以忽略第二个参数
    const [books, bookDispatch] = useReducer(bookReducer, [], 
        () => {
            const localBooks = localStorage.getItem("books");
            return localBooks ? JSON.parse(localBooks) : []
        }
    );

    // 当books做出变化的时候，将数据同步到localStorage
    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books))
    }, [books])

    return (
        <BookContext.Provider value={{ books, bookDispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}
