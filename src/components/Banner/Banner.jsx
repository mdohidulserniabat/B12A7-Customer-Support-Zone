import React from 'react';

const Banner = ({ count, resolvedCount }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-15 px-4">
        <div className="card w-full bg-[#632ee3] h-45 flex justify-center items-center text-white]">
          <h1 className="text-white">In-Progress</h1>
          <p>
            <span className="text-4xl text-white">{count}</span>
          </p>
        </div>
        <div className="card w-full bg-[#632ee3] h-45 flex justify-center items-center text-white">
          <h1>Resolved</h1>
          <p>
            <span className="text-4xl">{resolvedCount}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
