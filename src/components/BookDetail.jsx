import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import { actionTypes } from '../actions/bookActions';


const BookDetail = ({ book }) => {

    const { bookDispatch } = useContext(BookContext);

    return (
        <li className="list-group-item list-group-item-action" onClick={() => bookDispatch({ type: actionTypes.DEL_BOOK, id: book.id })} >
            <h3>
                {book.title}
            </h3>
            <small>
                {book.author}

            </small>


        </li>
    )
}


export default BookDetail;