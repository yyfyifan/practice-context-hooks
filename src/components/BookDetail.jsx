import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import { actionTypes } from '../actions/bookActions';


const BookDetail = ({ book }) => {

    const { bookDispatch } = useContext(BookContext);

    return (
        <div className="card" onClick={() => bookDispatch({ type: actionTypes.DEL_BOOK, id: book.id })} >
            <div className="card-body">
                {book.title}
                {book.author}
            </div>
        </div>
    )
}


export default BookDetail;