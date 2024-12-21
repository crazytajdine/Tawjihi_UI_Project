import React from 'react'

const SpecialiteSlot = ({specialite}) => {
  return (
    <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-black rounded-[10px]">
    <div className="relative w-fit mt-[-1.00px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-[color:var(--collection-1-TEXT)] text-2xl tracking-[0] leading-[Truepx]">
    {specialite}
    </div>
  </div>
  )
}

export default SpecialiteSlot