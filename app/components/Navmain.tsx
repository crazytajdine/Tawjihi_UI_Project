import React from "react";
import studentsImg from "/public/main.png";
import Image from "next/image";
import SearchTable from "./SearchTable";

export const NavMain = () => {
  return (
    <div
      className={`flex h-[551px] items-center  justify-between px-[66px] py-0 relative w-full  bg-cover bg-[50%_50%] bg-collection-1-main bg-main`}
    >
      <div className="flex flex-col items-start gap-[27px] relative flex-1 grow z-[1]">
        <p className="relative self-stretch h-[130px] mt-[-1.00px] [font-family:'Georgia-Bold',Helvetica] font-bold text-m-3black text-[50px] tracking-[0] leading-[57px]">
          Quoi étudier, où aller et comment y parvenir ?
        </p>
        <SearchTable />
      </div>

      <Image
        className="absolute right-11 w-[695px] h-[551px] z-0"
        alt="Students img"
        src={studentsImg}
      />
    </div>
  );
};
