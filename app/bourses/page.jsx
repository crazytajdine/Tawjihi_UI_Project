"use client";

import React, { useState, useEffect } from "react";
import BourseCard from "./components/BourseCard";
import Filters from "./components/Filters";
import boursesData from "../../jsondb/bourses.json"; // Importe ton JSON
import { NavUpperbarre } from "../NavUpperbarre";
import { NavFooter } from "../NavFooter";

export default function Page() {
  const [bourses, setBourses] = useState([]);
  const [filteredBourses, setFilteredBourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");

  // Charger les données JSON
  useEffect(() => {
    const data = Array.isArray(boursesData) ? boursesData : [];
    setBourses(data);
    setFilteredBourses(data);
  }, []);

  // Recherche par nom
  const handleSearch = () => {
    if (searchTerm.trim()) {
      const filtered = bourses.filter((bourse) =>
        bourse.nom.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBourses(filtered);
    } else {
      setFilteredBourses(bourses);
    }
  };

  // Filtrage par date
  const handleFilterDate = () => {
    if (filterDate.trim()) {
      const filtered = bourses.filter((bourse) => {
        if (
          !bourse.date_limite ||
          bourse.date_limite === "DÃ©lai de candidature Ã©chu"
        ) {
          return false;
        }
        return new Date(bourse.date_limite) <= new Date(filterDate);
      });
      setFilteredBourses(filtered);
    } else {
      setFilteredBourses(bourses);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* NAVBAR - Ne pas toucher */}
      <NavUpperbarre />

      {/* Filtres (barre de recherche + filtrage) */}
      {/* On le place dans un conteneur centré */}
      <div className="w-full max-w-4xl mx-auto">
        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterDate={filterDate}
          setFilterDate={setFilterDate}
          onSearch={handleSearch}
          onFilterDate={handleFilterDate}
        />
      </div>

      {/* Zone qui affiche les cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 w-full px-6 pb-10">
        {Array.isArray(filteredBourses) && filteredBourses.length > 0 ? (
          filteredBourses.map((bourse, index) => (
            <BourseCard key={index} bourse={bourse} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Aucune bourse trouvée.
          </p>
        )}
      </div>

      {/* FOOTER - Ne pas toucher */}
      <NavFooter />
    </div>
  );
}
