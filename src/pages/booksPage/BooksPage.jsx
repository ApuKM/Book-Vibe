import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext.js';

const BooksPage = () => {
    const {markAsReadBooks} = useContext(BookContext);
    console.log(markAsReadBooks)
    return (
        <div>
            Books
        </div>
    );
};

export default BooksPage;