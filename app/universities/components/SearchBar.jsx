import React from "react";

export default function SearchBar({ schoolname, register }) {
  const updateUrlParam = (name) => {
    const params = new URLSearchParams(window.location.search);
    if (name) {
      params.set("name", name); // Update or add the 'name' parameter
    } else {
      params.delete("name"); // Remove the 'name' parameter if empty
    }
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl); // Update the URL without reloading
  };

  return (
    <div className="w-full relative h-[210.5px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-0 px-[30px] box-border gap-3 text-left text-[24.52px] text-black font-inria-sans">
      <label htmlFor="inputname">
        <b className="self-stretch relative text-[32.7px]">Find University</b>
      </label>
      <label htmlFor="inputname" className="self-stretch relative">
        University name
      </label>
      <div className="w-full h-[79px] flex flex-row items-center justify-between max-w-[557.26px] ">
        <input
          {...register("name")}
          value={schoolname}
          onChange={(e) => updateUrlParam(e.target.value)}
          id="inputname"
          className="flex-1 rounded-[6.81px] bg-white border-black border-[2px] border-solid box-border flex flex-row items-center justify-center p-[6.8px] max-w-[423.74px]"
        />
        <button className="flex-1 rounded-[6.81px] bg-main  flex flex-row items-center justify-center p-[6.8px] box-border max-w-[100px] text-black">
          <div className="relative">search</div>
        </button>
      </div>
    </div>
  );
}
