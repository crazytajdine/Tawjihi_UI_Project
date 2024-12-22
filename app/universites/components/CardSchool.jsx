import Image from "next/image";
import SpecialiteSlot from "./SpecialiteSlot";

export default function CardSchool({ school, openPopup }) {
  const {
    name,
    specialites,
    studentSatisfactionScore,
    averageGraduateSalary,
    percentageInWorkOrFurtherStudy,
    picture,
    address,
  } = school;

  return (
    <div className="w-full min-w-[800px] max-w-[1000px] rounded-[41.76px] bg-main flex flex-col items-start justify-start py-[21.2px] px-[33.5px] box-border gap-[19.4px] text-left text-[16.47px] text-black font-inria-sans">
      {/* Header Section */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[3px] ">
        {/* School Info and Specialties */}
        <div className="self-stretch flex flex-row items-center justify-between">
          {/* School Name and Location */}
          <div className="flex flex-row items-center gap-4 w-1/3">
            {/* School Name */}
            <div className="flex flex-col">
              <span className="font-bold">{name} </span>
              {/* Location */}
              <span className="text-sm text-black60">
                {address.city} , {address.country}
              </span>
            </div>
          </div>

          {/* Specialty Slots */}
          <div className="flex flex-wrap gap-4 flex-1 justify-center text-white">
            {specialites.map((specialite, index) => {
              return <SpecialiteSlot key={index} specialite={specialite} />;
            })}
          </div>

          {/* View All Courses */}
          <div className="flex items-center text-black60 justify-end  ">
            <span className="cursor-pointer whitespace-nowrap hover:underline">
              View all courses &gt;
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="self-stretch flex flex-row items-center justify-center py-[3.5px] px-0 gap-[16.5px] text-[18.82px]">
        {/* School Image */}
        <Image
          className="w-[242.9px] relative rounded-[2.94px] h-[115.3px] object-cover"
          width={243}
          height={115}
          alt="School Image"
          src={picture}
        />

        {/* Statistics */}
        <div className="flex-1 flex flex-row  justify-start gap-[24.1px]">
          {/* Student Satisfaction */}
          <div className="flex flex-col ">
            <div className="relative">Student satisfaction score</div>
            <div className="mt-2">
              <b className="text-[23.53px]">{studentSatisfactionScore}</b>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-5 flex flex-row items-center justify-center">
          <div className="w-[1.2px] border-black border-r-[1.2px] border-dashed h-[147.6px]" />
        </div>

        {/* Average Graduate Salary */}
        <div className="flex-1 flex flex-row  justify-start gap-[24.1px]">
          <div className="flex flex-col ">
            <div className="relative">Average graduate salary</div>
            <div className="mt-2 text-[23.53px]">
              <b>{averageGraduateSalary} dh</b>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-5 flex flex-row items-center justify-center">
          <div className="w-[1.2px] border-black border-r-[1.2px] border-dashed h-[147.6px]" />
        </div>

        {/* % of Graduates in Work or Further Study */}
        <div className="flex-1 flex flex-row  justify-start gap-[24.1px]">
          <div className="flex flex-col ">
            <div className="relative">
              % of graduates in work or further study
            </div>
            <div className="mt-2">
              <b className="text-[23.53px]">
                {percentageInWorkOrFurtherStudy}%
              </b>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full flex flex-wrap items-center justify-center py-0 px-[22.9px] box-border gap-[23.5px] text-[14.12px]">
        {/* Open Days Button */}
        <button className="rounded-[5.88px] bg-black flex items-center justify-center p-[5.9px] text-white">
          Open days
        </button>

        {/* Get Prospectus Button */}
        <button
          onClick={openPopup}
          className="rounded-[5.88px] border-black border-[1.8px] border-solid flex items-center justify-center p-[5.9px]"
        >
          Get prospectus
        </button>

        {/* Request Info Button */}
        <button className="rounded-[5.88px] border-black border-[1.8px] border-solid flex items-center justify-center p-[5.9px]">
          Request info
        </button>

        {/* Visit Website Button */}
        <button className="rounded-[5.88px] border-black border-[1.8px] border-solid flex items-center justify-center p-[5.9px]">
          Visit website
        </button>
      </div>
    </div>
  );
}
