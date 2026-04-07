import React, { use } from "react";
import BookCard from "../shared/ui/BookCard";

const Books = ({ booksPromise }) => {
  const books = use(booksPromise);
  return (
    <div className="container mx-auto mt-12 md:mt-20">
      <h2 className="text-center text-[#131313] font-bold text-4xl">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
