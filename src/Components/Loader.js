import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center">
        <div className=" after:[absolute top-4 left-4 right-4 bottom-4 bg-gray-100 border-solid rounded-full] relative w-48 h-48 rounded-full bg-gradient-to-br from-red-500 via-blue-500 to-green-500 animate-spin border-4 border-white">
          <span className="blur-md absolute w-full h-full rounded-full bg-gradient-to-br from-red-500 via-blue-500 to-green-500"></span>
          <span className="blur-lg absolute w-full h-full rounded-full bg-gradient-to-br from-red-500 via-blue-500 to-green-500"></span>
          <span className="blur-xl absolute w-full h-full rounded-full bg-gradient-to-br from-red-500 via-blue-500 to-green-500"></span>
          <span className="blur-2xl absolute w-full h-full rounded-full bg-gradient-to-br from-red-500 via-blue-500 to-green-500;"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
