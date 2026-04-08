import React, { useState } from "react";
import { BookContext } from "./BookContext";


const BookProvider = ({ children }) => {
  const [markAsReadBooks, setMarkAsReadBooks] = useState([]);
  const handleMarkAsRead = (markedBook) => {
    const isExist = markAsReadBooks.find(
      (book) => book.bookId === markedBook.bookId,
    );
    if (isExist) {
      alert(`${markedBook.bookName} already exists in the read-book list!`);
      return;
    }
    setMarkAsReadBooks([...markAsReadBooks, markedBook]);
    alert(`${markedBook.bookName} added in the read-book list!`)
  };
  const data = { markAsReadBooks, setMarkAsReadBooks, handleMarkAsRead };
  return <BookContext value={data}>{children}</BookContext>;
};

export default BookProvider;
