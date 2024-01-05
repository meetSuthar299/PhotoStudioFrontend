import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="loader-container">
        <div className="loader">
          <span className="loader-span"></span>
          <span className="loader-span"></span>
          <span className="loader-span"></span>
          <span className="loader-span"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
