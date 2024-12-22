import React from "react";

const SpecialtieSlot = ({ specialtie }) => {
  return (
    <div className="rounded-[5.88px] bg-black flex flex-row items-center justify-center p-[6px]">
      <div className="relative">{specialtie}</div>
    </div>
  );
};

export default SpecialtieSlot;
