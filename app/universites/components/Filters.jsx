import React from "react";

export const Filters = ({ count }) => {
  const getUniversityLabel = () => {
    switch (true) {
      case count === 0:
        return "Aucune Université";
      case count === 1:
        return "Une Université";
      case count > 1:
        return `${count} Universités`;
      default:
        return "";
    }
  };
  console.log(count);

  return (
    <div className="w-full relative flex flex-row items-center justify-between text-left text-[24.34px] text-black font-inria-sans">
      <div className="flex flex-row items-center justify-center p-[6.8px]">
        <div className="relative"> {getUniversityLabel()}</div>
      </div>
      <button className="rounded-[6.76px] bg-whitesmoke flex flex-row items-center justify-center p-[6.8px]">
        more filters
      </button>
    </div>
  );
};
