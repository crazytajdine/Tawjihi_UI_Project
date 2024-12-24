import React from "react";
import studentsImg from "/public/main.png";
import Image from "next/image";
import SearchTable from "./SearchTable";

export const NavMain = () => {
  return (
    <div
      className=" 
        flex h-[700px] items-center justify-between 
        px-[66px] py-0 relative w-full mt-[40px]
        bg-[url('/minim.png')] bg-full bg-right
      "
    >
      <div className="flex flex-col items-start gap-[27px] relative flex-1 z-[1]">
        <p
          className="
            relative self-stretch h-[130px] mt-[-1px]
            font-bold text-white text-[50px] leading-[57px]
            [font-family:'Georgia-Bold',Helvetica]
          "
        >
          Quoi étudier, où aller et comment y parvenir ?
        </p>
        <SearchTable />
      </div>

      {/* Image masquée (hidden) */}
      <Image
        className="
          absolute right-11 w-[695px] h-[551px] z-0 hidden
        "
        alt="Students img"
        src={studentsImg}
      />
    </div>
  );
};
