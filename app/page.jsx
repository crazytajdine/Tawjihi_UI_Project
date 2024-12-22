import Events from "./components/main_Components/Events/Events";
import LabelEvents from "./components/main_Components/Events/LabelEvents";
import { Questions } from "./components/main_Components/Qustions/Questions";
import { Sponsors } from "./components/main_Components/Sponsors/sponsors";
import { NavMain } from "./components/main_Components/TableSearch/Navmain";
import { NavFooter } from "./NavFooter";
import { NavUpperbarre } from "./NavUpperbarre";

export default function Home() {
  return (
    <div className="flex flex-col h-[2394px] items-center justify-between  pb-0 px-0 relative bg-collection-1-white overflow-hidden">
      <NavUpperbarre />
      <NavMain />
      <LabelEvents />
      <Events />
      <Sponsors />
      <Questions />
      <NavFooter />
    </div>
  );
}
