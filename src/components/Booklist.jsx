import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import BookDetail from './BookDetail';

const BookList = () => {

    const { books } = useContext(BookContext);


    if (!books.length) {
        return <h4>No books, have a relax.</h4>
    }
    return (
        <div className="book-list">
            <ul className="list-group">
                {books.map(book => (
                    <BookDetail key={book.id} book={book} />
                ))}
            </ul>
        </div>
    )
}

export default BookList;