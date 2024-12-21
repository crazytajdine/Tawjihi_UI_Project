import React from "react";

export const SearchBar = () => {
  return (
    <div className="flex flex-col h-[210.51px] items-start justify-center gap-3 px-[30px] py-0 relative">
      <div className="relative self-stretch [font-family:'Inria_Sans-Bold',Helvetica] font-bold text-black text-[32.7px] tracking-[0] leading-[Truepx]">
        Find University
      </div>

      <div className="relative self-stretch [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-black text-[24.5px] tracking-[0] leading-[Truepx]">
        University name or location
      </div>

      <div className="max-w-[557.26px] h-[79.03px] justify-between self-stretch w-full flex items-center relative">
        <div className="max-w-[423.74px] justify-center gap-[6.81px] p-[6.81px] flex-1 grow bg-[color:var(--collection-1-TEXT)] rounded-[6.81px] border-[2.04px] border-solid border-black flex items-center relative">
          <div className="relative w-fit mt-[-2.04px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-[#736d6dcc] text-[24.5px] tracking-[0] leading-[Truepx] whitespace-nowrap">
            search for university
          </div>
        </div>

        <div className="max-w-[83.11px] h-[36.11px] justify-center gap-[6.81px] p-[6.81px] flex-1 grow bg-collection-1-main rounded-[6.81px] flex items-center relative">
          <div className="relative w-fit mt-[-3.94px] mb-[-2.58px] ml-[-0.26px] mr-[-0.26px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-black text-[24.5px] tracking-[0] leading-[Truepx] whitespace-nowrap">
            search
          </div>
        </div>
      </div>
    </div>
  );
};
