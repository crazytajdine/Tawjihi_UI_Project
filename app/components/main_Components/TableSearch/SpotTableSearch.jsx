const SpotTableSearch = ({ name, selected, setSelected, side }) => {
  return (
    <button
      className="flex flex-col h-full items-center justify-center flex-1"
      onClick={setSelected}
    >
      <div className="relative w-full flex-1 flex items-center justify-center text-center [font-family:'Georgia-Regular',Helvetica] font-normal text-m-3black text-[32px] tracking-[0] leading-[57px] whitespace-nowrap">
        {name}
      </div>
      <div
        className={`bg-collection-1-main w-full transition-all duration-75 ${
          side == null
            ? "rounded-[16px_16px_0px_0px]" // middle sides
            : side
            ? `rounded-[16px_0px_0px_0px]` // far right sides
            : "rounded-[0px_16px_0px_0px]" // far left sides
        } ${selected ? "h-1.5" : "h-0"}`}
      />
    </button>
  );
};

export default SpotTableSearch;
