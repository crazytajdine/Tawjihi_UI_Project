import React from "react";
import logo3 from "/public/logo-3.svg";
import Image from "next/image";
import Link from "next/link";

export const NavUpperbarre = () => {
  return (
    <div
      className={`flex h-[46px] items-center justify-between px-9 py-3.5 relative w-full `}
    >
      <Link href={"/"} className="flex  relative w-[161.75px] ">
        <Image className=" w-7 h-[25px] " alt="Logo" src={logo3} />

        <div className=" w-[130px]  [font-family:'Preahvihear-Regular',Helvetica] font-normal text-m-3black text-[20.2px] tracking-[0] leading-[normal]">
          AFTERBAC
        </div>
      </Link>

      <div className="flex w-[407.81px] items-center gap-[27px]  relative ">
        <Link
          href={"/universites"}
          className="relative   [font-family:'Georgia-Regular',Helvetica] font-normal text-m-3black text-lg tracking-[0] leading-[normal]"
        >
          Universités
        </Link>

        <Link
          href={"/Specialites"}
          className="relative w-[100px]  [font-family:'Georgia-Regular',Helvetica] font-normal text-m-3black text-lg tracking-[0] leading-[normal]"
        >
          Spécialités
        </Link>

        <Link
          href={"/Calender"}
          className="relative w-[100px]  [font-family:'Georgia-Regular',Helvetica] font-normal text-m-3black text-lg tracking-[0] leading-[normal]"
        >
          Calendrier
        </Link>

        <Link
          href={"/conseils"}
          className="relative w-[100px]  [font-family:'Georgia-Regular',Helvetica] font-normal text-m-3black text-lg tracking-[0] leading-[normal]"
        >
          Conseils
        </Link>
      </div>

      <div className="inline-flex items-center gap-[13.5px] relative flex-[0_0_auto] mt-[-14.62px] mb-[-14.62px]">
        <Link
          href={"/login"}
          className="relative w-fit [font-family:'Georgia-Regular',Helvetica] font-normal text-m-3black text-lg tracking-[0] leading-[normal] whitespace-nowrap"
        >
          Se connecter
        </Link>

        <Link
          href={"/register"}
          className="inline-flex items-center justify-center gap-[5.62px] p-[13.5px] relative flex-[0_0_auto] bg-collection-1-secondary rounded-[9px]"
        >
          <div className="relative w-fit  [font-family:'Georgia-Regular',Helvetica] font-normal text-collection-1-white text-lg tracking-[0] leading-[normal] whitespace-nowrap">
            S’inscrire
          </div>
        </Link>
      </div>
    </div>
  );
};
