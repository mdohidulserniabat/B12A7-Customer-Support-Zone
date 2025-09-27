import React from 'react';
import Image1 from '../../assets/vector1.png';
const Banner = ({ count, resolvedCount }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-15 px-4">
        <div className="card w-full bg-[#632ee3] h-45 flex justify-center items-center text-white]">
          <img
            src={Image1}
            alt="Vector left"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2" // বাম দিকে সেট করা হয়েছে
          />
          <div className="text-center">
            <h1 className="text-white">In-Progress</h1>
            <p>
              <span className="text-4xl text-white">{count}</span>
            </p>
          </div>
          <img
            src={Image1}
            alt="Vector right"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 scale-x-[-1]"
          />
        </div>
        <div className="card w-full bg-[#632ee3] h-45 flex justify-center items-center text-white">
          <img
            src={Image1}
            alt="Vector left"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2"
          />
          <div className="text-center">
            <h1>Resolved</h1>
            <p>
              <span className="text-4xl">{resolvedCount}</span>
            </p>
          </div>
          <img
            src={Image1}
            alt="Vector right"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
