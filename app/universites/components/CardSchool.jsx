import React from "react";
import Image from "next/image";

export const CardSchool = () => {
  return (
    <div className="flex flex-col w-[1531px] items-start gap-[33px] px-[57px] py-9 relative bg-collection-1-main rounded-[71px]">
      <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex w-[458px] items-center justify-between absolute top-0 left-[480px]">
            <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-black rounded-[10px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-[color:var(--collection-1-TEXT)] text-2xl tracking-[0] leading-[Truepx]">
                Informatique
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-black rounded-[10px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-[color:var(--collection-1-TEXT)] text-2xl tracking-[0] leading-[Truepx]">
                mecanique
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-black rounded-[10px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-[color:var(--collection-1-TEXT)] text-2xl tracking-[0] leading-[Truepx]">
                Electrique
              </div>
            </div>
          </div>

          <div className="flex w-[223px] items-center justify-center gap-2.5 absolute top-0 left-[1194px]">
            <div className="relative flex-1 mt-[-1.00px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-collection-1-black60 text-[28px] tracking-[0] leading-[Truepx]">
              view all cources &gt;
            </div>
          </div>

          <div className="absolute w-[385px] h-[88px] top-0 left-0">
            <p className="absolute w-[439px] -top-px left-0 [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-[Truepx]">
              Ecole national superieur des <br />
              arts et métiers
            </p>
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-collection-1-black60 text-2xl tracking-[0] leading-[Truepx]">
            Sidi Othman,Casablanca
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-7 px-0 py-1.5 relative self-stretch w-full flex-[0_0_auto]">
        <Image
          width={413}
          height={196}
          className="relative w-[413px] h-[196px] object-cover"
          alt="Element"
          src={"/images/EnsamPic.png"}
        />

        <div className="flex items-center gap-[41px] relative flex-1 grow">
          <div className="inline-flex justify-center p-2.5 flex-[0_0_auto] items-center gap-2.5 relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[Truepx]">
              Student <br />
              satisfaction
              <br />
              score
            </div>
          </div>

          <div className="w-[67px] mr-[-24.67px] flex flex-col items-center justify-center gap-2.5 p-2.5 relative">
            <div className="relative w-[115px] h-[97px] mt-[-1.00px] ml-[-34.00px] mr-[-34.00px] [font-family:'Inria_Sans-Bold',Helvetica] font-bold text-black text-[40px] text-center tracking-[0] leading-[Truepx]">
              80%
            </div>
          </div>
        </div>

        <div className="flex w-[34px] items-center justify-center gap-2.5 relative">
          <img className="relative w-0.5 h-[249px]" alt="Line" src={null} />
        </div>

        <div className="flex items-center gap-[41px] relative flex-1 grow">
          <div className="inline-flex justify-center p-2.5 flex-[0_0_auto] items-center gap-2.5 relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[Truepx]">
              Average <br />
              graduate
              <br />
              salary
            </div>
          </div>

          <div className="w-[67px] flex flex-col items-center justify-center gap-2.5 p-2.5 relative">
            <div className="relative w-[133px] mt-[-1.00px] ml-[-43.00px] mr-[-43.00px] [font-family:'Inria_Sans-Bold',Helvetica] font-bold text-black text-[32px] text-center tracking-[0] leading-[Truepx]">
              10K Dh
              <br />
              High
            </div>
          </div>
        </div>

        <div className="flex w-[34px] items-center justify-center gap-2.5 relative">
          <img className="relative w-0.5 h-[249px]" alt="Line" src={null} />
        </div>

        <div className="flex items-center gap-[41px] relative flex-1 self-stretch grow">
          <div className="flex flex-1 grow items-center gap-2.5 relative">
            <p className="relative self-stretch w-[177px] mt-[-1.00px] mr-[-64.83px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[Truepx]">
              % of graduates <br />
              in work or <br />
              further study
            </p>
          </div>

          <div className="h-[117px] flex-1 grow flex flex-col items-center justify-center gap-2.5 p-2.5 relative">
            <div className="relative flex-1 self-stretch mt-[-1.00px] [font-family:'Inria_Sans-Bold',Helvetica] font-bold text-black text-[40px] text-center tracking-[0] leading-[Truepx]">
              95%
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[1450px] items-center justify-center gap-10 px-[39px] py-0 relative flex-[0_0_auto] mr-[-33.00px]">
        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-black rounded-[10px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-[color:var(--collection-1-TEXT)] text-2xl tracking-[0] leading-[Truepx]">
            Open days
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-[10px] border-[3px] border-solid border-black">
          <div className="relative w-fit mt-[-3.00px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[Truepx]">
            get prospectus
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-[10px] border-[3px] border-solid border-black">
          <div className="relative w-fit mt-[-3.00px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[Truepx]">
            Request info
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-[10px] border-[3px] border-solid border-black">
          <div className="relative w-fit mt-[-3.00px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[Truepx]">
            visit website
          </div>
        </div>
      </div>
    </div>
  );
};
