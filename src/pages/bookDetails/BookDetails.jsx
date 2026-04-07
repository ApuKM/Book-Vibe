import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const books = useLoaderData();
  // console.log(books)
  const { bookId: paramsId } = useParams();
  // console.log(bookId)
  const clickedBook = books.find((item) => item.bookId === Number(paramsId));
  // console.log(clickedBook)
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = clickedBook;

  return (
    <div className="container mx-auto mt-12 md:mt-20">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className="w-full h-full md:w-106.25 md:h-139 bg-base-200 flex-1 ">
          <img
            src={image}
            alt={bookName}
            className="p-8 object-contain object-center"
          />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title text-[#131313] font-bold text-4xl">
            {bookName}
          </h2>
          <h4 className="text-[#131313]/80 font-medium text-lg">
            By: {author}
          </h4>
          <p className="text-[#131313]/80 font-medium text-lg border-t border-b border-gray-200 py-1 flex-none">
            {category}
          </p>
          <p className="flex-none">
            <span className="font-bold text-[#131313]">Review:</span>
            <span className=" text-[#131313]/70 leading-6"> {review}</span>
          </p>
          <div className="flex items-center gap-2 border-b border-gray-200 py-4">
            <span className="text-[#131313] font-bold">Tags:</span>
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge bg-base-300 font-medium text-[#23BE0A]"
              >
                #{tag}
              </div>
            ))}
          </div>
          <div className="space-y-2 flex-1">
            <div className="flex">
              <span className="w-48 text-[#131313]/70">Number of Pages:</span>
              <span className="text-[#131313] font-medium">{totalPages}</span>
            </div>

            <div className="flex">
              <span className="w-48 text-[#131313]/70">Publisher:</span>
              <span className="text-[#131313] font-medium">{publisher}</span>
            </div>

            <div className="flex">
              <span className="w-48 text-[#131313]/70">
                Year of Publishing:
              </span>
              <span className="text-[#131313] font-medium">
                {yearOfPublishing}
              </span>
            </div>

            <div className="flex">
              <span className="w-48 text-[#131313]/70">Rating:</span>
              <span className="text-[#131313] font-medium">{rating}</span>
            </div>
          </div>
          <div className="card-actions gap-4 mt-4">
            <button className="btn btn-outline text-[#131313] text-base border-gray-400">Read</button>
            <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
