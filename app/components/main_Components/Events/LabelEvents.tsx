import type { NextPage } from "next";

const LabelEvents: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-start text-left text-[32px] text-m3-black font-inter">
      <div className="flex flex-row items-center justify-center p-2.5">
        <div className="relative">{`Prochain événement `}</div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center p-2.5 mt-[-6px] text-[48px] font-tilt-warp">
        <div className="relative">
          Decouvrez nos prochains événement virtuels
        </div>
      </div>
    </div>
  );
};

export default LabelEvents;
