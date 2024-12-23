"use client";

import React, { useState } from "react";
import searchTitles from "./searchTableElements.json";
import SpotTableSearch from "./SpotTableSearch";

const SearchTable = () => {
  const [selected, setSelected] = useState(0);
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the input value

  const handleSearch = (e) => {
    e.preventDefault();
    const selectedSearch = searchTitles[selected];
    if (selectedSearch?.url) {
      // Redirect to the URL with the search term as a query parameter
      const searchUrl = `${selectedSearch.url}?name=${encodeURIComponent(
        searchTerm
      )}`;
      window.location.href = searchUrl;
    }
  };

  return (
    <div className="flex flex-col h-64 items-start justify-center relative self-stretch w-full max-w-[757px] mr-[-139.00px] mw">
      <div className="flex flex-col w-full">
        <div className="flex h-[81px] items-center justify-between relative self-stretch w-full bg-collection-1-white rounded-[16px_16px_0px_0px]">
          {searchTitles.map((search, index) => (
            <SpotTableSearch
              key={index}
              selected={selected == index}
              setSelected={() => setSelected(index)}
              side={
                index == 0
                  ? false
                  : index == searchTitles.length - 1
                  ? true
                  : null
              }
              name={search.name}
            />
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSearch}
        className="flex flex-col items-start gap-3 px-3 py-[19px] relative flex-1 self-stretch w-full grow bg-collection-1-white60 rounded-[0px_0px_10px_10px]"
      >
        <label
          htmlFor="universitySearchName"
          className="relative w-[1029px] mt-[-1.00px] mr-[-296.00px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-m-3black text-2xl tracking-[0] leading-[57px]"
        >
          {searchTitles[selected].title}
        </label>

        <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <input
            id="universitySearchName"
            placeholder={searchTitles[selected].placeholder}
            value={searchTerm} // Bind input value to state
            onChange={(e) => setSearchTerm(e.target.value)} // Update state on change
            className="flex h-[57px] items-center gap-2.5 p-2.5 relative flex-1 grow bg-collection-1-white rounded-xl border border-solid border-collection-1-black60"
          ></input>

          <button
            type="submit"
            className="flex w-[151px] h-[58px] items-center justify-center gap-2.5 p-2.5 relative bg-collection-1-secondary rounded-[10px]"
          >
            <div className="relative w-fit mt-[-11.50px] mb-[-7.50px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-collection-1-white text-[32px] tracking-[0] leading-[57px] whitespace-nowrap">
              Search
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchTable;
