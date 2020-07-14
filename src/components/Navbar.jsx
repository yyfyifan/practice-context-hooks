import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = (props) => {
    const { books } = useContext(BookContext);
    return (
        <div >
            <h1>Reading List</h1>
            <p>Currently you have {books.length} books</p>
        </div>
    )
}

export default Navbar;