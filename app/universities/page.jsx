"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // For Next.js; use URLSearchParams if you're using plain React
import { NavUpperbarre } from "../NavUpperbarre";
import { NavFooter } from "../NavFooter";
import SchoolsResultsFilter from "./components/SchoolsResultsFilter";
import SearchBar from "./components/SearchBar";
import { useForm } from "react-hook-form";
import axios from "axios";
import GetProspectusPopup from "./components/GetProspectusPopup";

export default function University() {
  const { register, handleSubmit } = useForm();
  const [schools, setSchools] = useState([]);
  const [schoolname, setschoolname] = useState("");

  const searchParams = useSearchParams(); // For getting query params
  const queryName = searchParams.get("name") || ""; // Get the 'name' param
  const openPopup = (schoolname) => setschoolname(schoolname);
  const closePopup = () => setschoolname("");

  const fetchSchools = (name = "") => {
    const config = {
      method: "get",
      url: `/api/School${name ? `?name=${name}` : ""}`,
    };
    axios(config).then((res) => setSchools(res.data));
  };

  const onSubmit = (data) => {
    fetchSchools(data.name);
  };

  useEffect(() => {
    if (queryName) {
      // If a name query parameter exists, fetch schools for that name
      fetchSchools(queryName);
    } else {
      // Otherwise, fetch all schools
      fetchSchools();
    }
  }, []); // Re-run when queryName changes

  return (
    <div className="flex flex-col w-full items-center gap-[86px] relative bg-[color:var(--collection-1-TEXT)]">
      <NavUpperbarre />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full items-center gap-[86px] relative bg-[color:var(--collection-1-TEXT)]"
      >
        <SearchBar schoolname={queryName} register={register} />
        <SchoolsResultsFilter
          openPopup={openPopup}
          schools={schools}
          register={register}
        />
      </form>
      {schoolname !== "" && (
        <GetProspectusPopup schoolname={schoolname} onClose={closePopup} />
      )}
      <NavFooter />
    </div>
  );
}
