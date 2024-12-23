import Link from "next/link";
import React from "react";

export const Questions = () => {
  return (
    <div
      className={`flex h-[113px] items-center justify-between px-[66px] py-0 relative w-full bg-collection-1-main `}
    >
      <div className="inline-flex items-center p-2.5 relative flex-[0_0_auto]">
        <div className="relative w-[437.85px] mt-[-1.00px] [font-family:'Tilt_Warp-Regular',Helvetica] font-normal text-m-3black text-[37.2px] tracking-[0] leading-[normal]">
          Avez-vous une question ?
        </div>
      </div>

      <Link
        href={"/contact"}
        className="flex w-[207.98px] items-center justify-center px-[18px] py-2 relative bg-collection-1-secondary rounded-[24.05px] shadow-[0px_2.53px_2.57px_1px_#00000040]"
      >
        <div className="relative w-fit mt-[-0.42px] ml-[-11.51px] mr-[-11.51px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-collection-1-white text-[27px] tracking-[0] leading-[normal] whitespace-nowrap">
          Contactez-nous !
        </div>
      </Link>
    </div>
  );
};
