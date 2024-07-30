import React, { useState } from "react";

function PositionCard({ title, exp, res, icon,handleButtonClick }) {

  return (
    <>
    <div
      className="relative flex items-center gap-3 mt-4 w-fit h-fit min-w-[300px] flex-wrap rounded-lg p-6"
      style={{
        boxShadow: "0px 2px 4px rgba(14, 30, 37, 0.12), 0px 2px 16px rgba(14, 30, 37, 0.32)",
        zIndex: 1 // Ensure this is lower than the modal z-index
      }}
    >
      <div className="h-14 w-14 text-[48px] text-cyan-400">
        {icon}
      </div>
      <div className="flex flex-col">
        <h1 className="font-sans font-bold min-w-[220px] text-red-600 text-xl">
          {title}
        </h1>
        <h1 className="font-sans font-semibold text-stone-800 text-md">
          Experience: {exp}
        </h1>
        <h1 className="font-sans font-normal text-stone-500 text-md">
          full time/remote
        </h1>
      </div>
      <div className="h-full flex">
        <button
          className="px-3 text-sm py-1 bg-red-500 rounded-3xl text-white"
          onClick={() => handleButtonClick(title)}
          >
          Apply Now
        </button>
      </div>

     
    </div>

          </>
  );
}

export default PositionCard;
