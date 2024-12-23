"use client";

import React, { useState, useEffect } from "react";
import BourseCard from "./components/BourseCard";
import Filters from "./components/Filters";
import boursesData from "../../jsondb/bourses.json"; // Importe les données du fichier JSON
import { NavUpperbarre } from "../NavUpperbarre";
import { NavFooter } from "../NavFooter";

export default function Page() {
  const [bourses, setBourses] = useState([]);
  const [filteredBourses, setFilteredBourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");

  // Charger les données du fichier JSON lors du montage
  useEffect(() => {
    const data = Array.isArray(boursesData) ? boursesData : [];
    setBourses(data);
    setFilteredBourses(data);
  }, []);

  // Gestion de la recherche par nom
  const handleSearch = () => {
    if (searchTerm.trim()) {
      const filtered = bourses.filter((bourse) =>
        bourse.nom.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBourses(filtered);
    } else {
      setFilteredBourses(bourses); // Réinitialise les résultats si le champ est vide
    }
  };

  // Gestion du filtrage par date
  const handleFilterDate = () => {
    if (filterDate.trim()) {
      const filtered = bourses.filter((bourse) => {
        if (!bourse.date_limite || bourse.date_limite === "DÃ©lai de candidature Ã©chu") {
          return false;
        }
        return new Date(bourse.date_limite) <= new Date(filterDate);
      });
      setFilteredBourses(filtered);
    } else {
      setFilteredBourses(bourses); // Réinitialise les résultats si le champ est vide
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <NavUpperbarre></NavUpperbarre>
      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterDate={filterDate}
        setFilterDate={setFilterDate}
        onSearch={handleSearch}
        onFilterDate={handleFilterDate}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-6">
        {Array.isArray(filteredBourses) && filteredBourses.length > 0 ? (
          filteredBourses.map((bourse, index) => (
            <BourseCard key={index} bourse={bourse} />
          ))
        ) : (
          <p className="text-center text-gray-500">Aucune bourse trouvée.</p>
        )}
      </div>
      <NavFooter></NavFooter>
    </div>
  );
}
