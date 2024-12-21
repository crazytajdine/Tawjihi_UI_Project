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
    <div className="flex items-center justify-between relative">
      <div className="inline-flex items-center justify-center gap-[6.76px] p-[6.76px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-0.68px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-black text-[24.3px] tracking-[0] leading-[Truepx] whitespace-nowrap">
          {getUniversityLabel()}
        </div>
      </div>

      <div className="bg-[#efefef] rounded-[6.76px] inline-flex items-center justify-center gap-[6.76px] p-[6.76px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-0.68px] [font-family:'Inria_Sans-Bold',Helvetica] font-bold text-black text-[24.3px] tracking-[0] leading-[Truepx] whitespace-nowrap">
          more filters
        </div>
      </div>
    </div>
  );
};
