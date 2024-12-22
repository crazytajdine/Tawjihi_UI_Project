import React from "react";

const SpecialiteSlot = ({ specialite }) => {
  return (
    <div className="rounded-[5.88px] bg-black flex flex-row items-center justify-center p-[6px]">
      <div className="relative">{specialite}</div>
    </div>
  );
};

export default SpecialiteSlot;
