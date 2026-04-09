import React from "react";
import { Link } from "react-router";

const EmptyCart = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-gray-100 p-4 rounded-full">
            🛒
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Your List is Empty
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          Looks like you haven’t added anything yet.
        </p>

        {/* Button */}
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition"><Link to={"/"}>
          Continue
          </Link>
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;