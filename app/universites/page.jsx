import React from "react";
import { NavUpperbarre } from "../NavUpperbarre";
import { NavFooter } from "../NavFooter";
import SchoolsResultsFilter from "./components/SchoolsResultsFilter";
import SearchBar from "./components/SearchBar";
export default function University() {
  return (
    <div className="flex flex-col items-center gap-[86px] relative bg-[color:var(--collection-1-TEXT)]">
      <NavUpperbarre />
      <SearchBar />
      <SchoolsResultsFilter />
      <NavFooter />
    </div>
  );
}
