import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";

const TabCard = ({ book }) => {
  const {
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="border border-zinc-100 rounded-lg">
      <div className="card card-side bg-base-100 shadow-sm p-4">
        <figure className="w-57.5 h-57.5 bg-base-200 p-2">
          <img src={image} alt={bookName} className="p-2 object-contain object-center"/>
        </figure>
        <div className="card-body py-2">
          <h2 className="card-title text-[#131313] text-xl font-bold">{bookName}</h2>
          <p className="flex-none text-[#131313] font-medium">By: {author}</p>
          <div className="flex items-center gap-3 ">
            <span className="text-[#131313] font-bold">Tags:</span>
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge bg-base-300 font-medium text-[#23BE0A]"
              >
                #{tag}
              </div>
            ))}
            <p className="flex items-center gap-1 text-[#131313]/80 ml-4">
              <CiLocationOn />
              <span>Year Of Publishing: {yearOfPublishing}</span>
            </p>
          </div>
          <div className="flex items-center gap-4 border-b border-gray-200 pb-2">
            <div className="flex items-center gap-2 text-[#131313]/60 "><GoPeople /> <p>Publisher: {publisher}</p></div>
            <div className="flex items-center gap-2 text-[#131313]/60"><RiPagesLine /><p>Pages: {totalPages}</p></div>
          </div>
          <div className="card-actions gap-4 mt-2">
            <h4 className="bg-cyan-100 py-2 px-4 text-cyan-600 rounded-full">Category: {category}</h4>
            <h4 className="bg-orange-100 p-2 text-orange-600 rounded-full">Rating: {rating}</h4>
            <button className="btn bg-[#23BE0A] text-white rounded-full">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
