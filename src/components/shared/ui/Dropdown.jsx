import React from "react";

const Dropdown = ({setSortingType}) => {
  return (
    <div className="flex justify-end">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white">
          Sort by
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={() => setSortingType("pages")}>
            <a>Pages</a>
          </li>
          <li onClick={() => setSortingType("rating")}>
            <a>Rating</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
