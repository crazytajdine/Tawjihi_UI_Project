import  CardEvent  from "./CardEvent";

const Events = () => {
  return (
    <div className="w-full relative flex flex-row items-center justify-between py-0 px-[60px] box-border text-center text-5xl-4 text-white font-inria-sans">
      <CardEvent />
      <CardEvent />
      <CardEvent />
    </div>
  );
};

export default Events;
