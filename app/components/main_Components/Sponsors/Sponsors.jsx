import React from "react";
import Image from "next/image";
import sponsors from "./sponsors.json";
export const Sponsors = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-0 py-[25px] relative">
      <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
        <div className=" mt-[60px] relative w-fit  [font-family:'Inter-Regular',Helvetica] font-normal text-m-3black text-5xl tracking-[0] leading-[normal]">
          Nos partenaires
        </div>
      </div>

      <div className="flex mt-[50px] items-center justify-center relative self-stretch w-full ">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="relative group">
            <Image
              width={500}
              height={500}
              className="relative h-[105px] flex-1 grow object-cover"
              alt={sponsor.name}
              src={sponsor.src}
            />
            <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 mx-auto flex justify-center items-end text-xl bg-collection-1-main text-collection-1-secondary w-1/3 rounded-lg ">
              {sponsor.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
