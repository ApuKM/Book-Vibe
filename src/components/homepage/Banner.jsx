import React from "react";
import heroImg from "../../assets/hero_img.jpg"

const Banner = () => {
  return (
    <div className="">
      <div className="hero container mx-auto bg-base-200 min-h-[60vh] py-6 md:px-15">
        <div className="hero-content flex-col lg:flex-row-reverse gap-6">
          <img
            src={heroImg}
            className="w-full md:max-w-sm rounded-lg shadow-2xl"
          />
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-[#131313]">Books to freshen up your bookshelf</h1>
            <button className="btn btn-success bg-[#23BE0A] shadow-none border-none text-white">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
