import React from "react";
import { NavUpperbarre } from "../NavUpperbarre";
import { NavFooter } from "../NavFooter";
import { SearchBar } from "./components/Searchbar";
import { CardSchool } from "./components/CardSchool";
import { Filters } from "./components/Filters";

export default function University() {
  return (
    <div className="flex flex-col items-center gap-[86px] relative bg-[color:var(--collection-1-TEXT)]">
      <NavUpperbarre />
      <SearchBar />
      <Filters count={4} />
      <CardSchool />
      <NavFooter />
    </div>
  );
}
