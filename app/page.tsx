import Events from "./components/main_Components/Qustions/Events";
import LabelEvents from "./components/main_Components/Qustions/LabelEvents";
import { NavMain } from "./components/main_Components/TableSearch/Navmain";
import { NavUpperbarre } from "./components/NavUpperbarre";

export default function Home() {
  return (
    <div>
      <NavUpperbarre />
      <NavMain />
      <LabelEvents />
      <Events />
    </div>
  );
}
