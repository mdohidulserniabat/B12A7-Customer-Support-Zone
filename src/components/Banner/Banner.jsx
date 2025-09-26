import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-15 px-4">
        <div className="card w-full bg-[#632ee3] h-45 flex justify-center items-center text-white">
          <h1>In-Progress</h1>
          <p>
            <span className="text-4xl">0</span>
          </p>
        </div>
        <div className="card w-full bg-[#632ee3] h-45 flex justify-center items-center text-white">
          <h1>Resolved</h1>
          <p>
            <span className="text-4xl">0</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
