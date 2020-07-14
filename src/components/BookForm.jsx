import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import { actionTypes } from '../actions/bookActions';

const BookForm = () => {
    const { bookDispatch } = useContext(BookContext);
    
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault();
        bookDispatch({ type: actionTypes.ADD_BOOK, title, author });
        setTitle('')
        setAuthor('')
    }

    return (
        <div className="book-form">
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Book Title</label>
                    <input type="text" value={title} name="title" id="title" className="form-control"
                        onChange={(e) => { setTitle(e.target.value) }} />

                </div>
                <div className="form-group">
                    <label htmlFor="author">Book Author</label>
                    <input type="text" value={author} name="author" id="author" className="form-control"
                        onChange={(e) => { setAuthor(e.target.value) }} />
                </div>

                <input type="submit" className="btn btn-primary" value="Add Book" />
            </form>
        </div>
    )
}


export default BookForm;