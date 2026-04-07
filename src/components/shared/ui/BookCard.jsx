import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <Link to={`bookDetails/${bookId}`} className="border border-gray-50">
      <div className="card bg-base-100 shadow-sm hover:shadow-lg transition-all p-4">
        <figure className="w-full h-48 bg-gray-100 flex items-center justify-center">
          <img src={image} alt={bookName} className="h-full object-contain rounded-md"/>
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-1">
            {tags.map((tag, index) => (
              <div key={index} className="badge bg-base-300 font-medium text-[#23BE0A]">{tag}</div>
            ))}
          </div>
          <h2 className="card-title font-bold text-xl text-[#131313]">{bookName}</h2>
          <p className="font-medium text-[#131313]/80 border-b border-dashed border-gray-300 pb-3">By: {author}</p>
          <div className="card-actions justify-between pt-3 ">
            <div className="badge text-base font-medium text-[#131313]/80">{category}</div>
            <div className="badge gap-1 text-base font-medium text-[#131313]/80">{rating.toFixed(2)} <CiStar /></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
