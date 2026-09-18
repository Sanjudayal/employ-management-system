import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="leading-tight text-2xl font-normal">
        Hello,
        <br /> <span className="text-3xl font-semibold"> sanju 👋</span>
      </h1>
      <button className="bg-transparent hover:bg-[#FF4B4B] text-[#FF4B4B] hover:text-white border border-[#FF4B4B] font-semibold px-5 py-2 rounded transition-all duration-200 ease-in-out hover:shadow-[0_0_15px_rgba(255,75,75,0.4)]">
        Log out
      </button>
    </div>
  );
};

export default Header;
