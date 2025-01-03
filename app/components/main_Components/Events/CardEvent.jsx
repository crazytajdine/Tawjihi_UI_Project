import Image from "next/image";

const CardEvent = ({ event }) => {
  const { logo, title, date, inscrit, isPresential } = event;
  const datevalue = new Date(date);

  // Format date as YYYY:MM:DD
  const year = datevalue.getFullYear();
  const month = String(datevalue.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(datevalue.getDate()).padStart(2, "0");

  // Format time as HH:MM
  const hours = String(datevalue.getHours()).padStart(2, "0");
  const minutes = String(datevalue.getMinutes()).padStart(2, "0");

  // Combine date and time
  const formattedDay = `${year}:${month}:${day}`;
  const formattedHour = `${hours}:${minutes}`;

  return (
    <div className="w-[309.88px] relative shadow-[0px_2.440000057220459px_2.44px_rgba(0,_0,_0,_0.25)] rounded-[9.76px] bg-white h-[406.3px] flex flex-col items-center justify-between py-[24.4px] px-[7.3px] box-border text-center text-5xl-4 text-black font-inria-sans">
      <div className="self-stretch flex flex-col items-start justify-start text-[19.52px]">
        <div className="self-stretch rounded-[9.15px] h-[50.6px] flex flex-row items-center justify-between">
          <Image
            className="w-[143.4px] relative rounded-[3.66px] h-[50.6px] object-cover"
            width={143}
            height={51}
            alt=""
            src={logo}
          />
          <div className="inline-flex items-center justify-center gap-[6.1px] p-[9.15px] relative bg-collection-1-secondary rounded-[457.07px]">
            <div className="relative w-[96.99px] h-[24.4px] mt-[-0.46px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-collection-1-white text-[19.5px] text-center tracking-[0] leading-[normal]">
              {isPresential}
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[111.6px] flex flex-col items-center justify-start text-left text-secondary">
        <div className="self-stretch flex flex-row items-center justify-start p-[6.1px]">
          <div className="relative">{`Evenement `}</div>
        </div>
        <div className="self-stretch h-[40.3px] flex flex-row items-center justify-start p-[6.1px] box-border text-m3-black">
          <b className="self-stretch flex-1 relative">{title}</b>
        </div>
      </div>
      <div className="self-stretch h-[76.3px] flex flex-row items-center justify-between text-left text-secondary">
        <div className="self-stretch flex-1 flex flex-col items-start justify-center p-[6.1px] box-border gap-[6.1px] min-w-[126.27px]">
          <div className="self-stretch flex-1 relative font-light">date</div>
          <b className="relative text-m3-black">{formattedDay}</b>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-center p-[6.1px] gap-[6.1px]">
          <div className="self-stretch flex-1 relative font-light">Heure</div>
          <b className="self-stretch flex-1 relative text-m3-black">
            {formattedHour}
          </b>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-center p-[6.1px] gap-[6.1px]">
          <div className="self-stretch flex-1 relative font-light">Inscrit</div>
          <b className="self-stretch flex-1 relative text-m3-black">
            {inscrit}
          </b>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start text-[23.41px]">
        <button className="rounded-[8.36px] bg-collection-1-secondary text-white flex flex-row items-center justify-center p-[8.4px]">
          <div className="relative">S’inscrire</div>
        </button>
      </div>
    </div>
  );
};

export default CardEvent;
