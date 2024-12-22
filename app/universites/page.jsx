"use client";
import React, { useEffect, useState } from "react";
import { NavUpperbarre } from "../NavUpperbarre";
import { NavFooter } from "../NavFooter";
import SchoolsResultsFilter from "./components/SchoolsResultsFilter";
import SearchBar from "./components/SearchBar";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function University() {
  const { register, handleSubmit } = useForm();
  const [schools, setSchools] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    const config = {
      method: "get",
      url: "/api/School?name=" + data.name,
    };
    axios(config).then((res) => setSchools(res.data));
  };
  useEffect(() => {
    const config = {
      method: "get",
      url: "/api/School",
    };
    axios(config).then((res) => setSchools(res.data));
  }, []);

  return (
    <div className="flex flex-col  w-full  items-center gap-[86px] relative bg-[color:var(--collection-1-TEXT)]">
      <NavUpperbarre />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full items-center gap-[86px] relative bg-[color:var(--collection-1-TEXT)]"
      >
        <SearchBar register={register} />
        <SchoolsResultsFilter schools={schools} register={register} />
      </form>
      <NavFooter />
    </div>
  );
}
