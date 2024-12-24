"use client";
import { useEffect, useState } from "react";
import CardEvent from "./CardEvent";
import axios from "axios";

const Events = () => {
  const [events, setevents] = useState([]);
  useEffect(() => {
    const config = {
      type: "get",
      url: "/api/Events?count=3",
    };
    axios(config).then((res) => {
      setevents(res.data);
    });
  }, []);
  return (
    <div className=" w-full mt-[15px] relative
    flex flex-row items-center
    justify-center
    space-x-16
    py-0 px-[60px]
    box-border text-center
    text-5xl-4 text-white font-inria-sans">
      {events.map((event, index) => {
        return <CardEvent key={index} event={event} />;
      })}
    </div>
  );
};

export default Events;
