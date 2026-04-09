import React, { useState } from "react";
import { BookContext } from "./BookContext";
import { toast } from "react-toastify";

const BookProvider = ({ children }) => {
  const [markAsReadBooks, setMarkAsReadBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleMarkAsRead = (markedBook) => {
    const isExist = markAsReadBooks.find(
      (book) => book.bookId === markedBook.bookId,
    );
    if (isExist) {
      toast.error(
        `${markedBook.bookName} already exists in the read-book list!`,
      );
      return;
    }
    setMarkAsReadBooks((prev) => [...prev, markedBook]);
    toast.success(`${markedBook.bookName} added in the read-book list!`);
  };

  const handleWishList = (markedBook) => {
    const isExistsInReadList = markAsReadBooks.find(
      (book) => book.bookId === markedBook.bookId,
    );
    if (isExistsInReadList) {
      toast.info(`${markedBook.bookName} is read.`);
      return;
    }
    const isExist = wishList.find((book) => book.bookId === markedBook.bookId);
    if (isExist) {
      toast.error(`${markedBook.bookName} already exists in the wish list!`);
      return;
    }
    setWishList((prev) => [...prev, markedBook]);
    toast.success(`${markedBook.bookName} added in the wish-book list!`);
  };

  const data = {
    markAsReadBooks,
    setMarkAsReadBooks,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList,
  };

  return <BookContext value={data}>{children}</BookContext>;
};

export default BookProvider;
