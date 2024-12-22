import { Filters } from "./filters";
import CardSchool from "./CardSchool";

export default function SchoolsResultsFilter({ register, schools }) {
  return (
    <div className="w-full relative  flex flex-col items-center justify-start py-0 px-[30px] box-border gap-4 text-left text-[24.34px] text-black font-inria-sans">
      <Filters count={schools.length} register={register} />
      <div className="self-stretch gap-10   shrink-0 flex flex-row items-start justify-center flex-wrap content-start text-[16.5px]">
        {schools.map((school, index) => {
          return <CardSchool key={index} school={school} />;
        })}
      </div>
    </div>
  );
}
