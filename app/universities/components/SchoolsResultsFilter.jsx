// src/components/SchoolsResultsFilter.js
"use client";

import React, { useState, useEffect, useMemo } from "react";
import Filters from "./Filters"; // Ensure correct import path
import CardSchool from "./CardSchool"; // Ensure correct import path

const SchoolsResultsFilter = ({ schools, openPopup }) => {
  // State to hold the filtered schools
  const [filteredSchools, setFilteredSchools] = useState(schools);

  // State for selected specialities
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);

  // State for selected locations
  const [selectedLocations, setSelectedLocations] = useState([]);

  // New filter states for Rating
  const [ratingMin, setRatingMin] = useState("");
  const [ratingMax, setRatingMax] = useState("");

  // New filter states for Graduates in Work or Further Study
  const [graduatesMin, setGraduatesMin] = useState("");
  const [graduatesMax, setGraduatesMax] = useState("");

  // New filter states for Salary
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");

  // Extract unique specialities from the schools data
  const uniqueSpecialties = useMemo(() => {
    const allSpecs = schools.flatMap((school) => school.specialties);
    return Array.from(new Set(allSpecs));
  }, [schools]);

  // Apply filters whenever any filter criteria change
  useEffect(() => {
    let filtered = schools;

    // Filter by selected specialities
    if (selectedSpecialties.length > 0) {
      filtered = filtered.filter((school) =>
        school.specialties.some((spec) => selectedSpecialties.includes(spec))
      );
    }

    // Filter by selected locations
    if (selectedLocations.length > 0) {
      filtered = filtered.filter((school) =>
        selectedLocations.some((loc) => {
          const [city, country] = loc
            .split(",")
            .map((str) => str.trim().toLowerCase());
          const schoolCity = school.address.city.toLowerCase();
          const schoolCountry = school.address.country.toLowerCase();
          if (city && country) {
            return schoolCity.includes(city) && schoolCountry.includes(country);
          } else if (city) {
            return schoolCity.includes(city);
          } else if (country) {
            return schoolCountry.includes(country);
          }
          return false;
        })
      );
    }

    // Filter by Rating
    if (ratingMin) {
      const min = parseFloat(ratingMin);
      if (!isNaN(min)) {
        filtered = filtered.filter(
          (school) => school.studentSatisfactionScore >= min
        );
      }
    }
    if (ratingMax) {
      const max = parseFloat(ratingMax);
      if (!isNaN(max)) {
        filtered = filtered.filter(
          (school) => school.studentSatisfactionScore <= max
        );
      }
    }

    // Filter by Graduates in Work or Further Study
    if (graduatesMin) {
      const min = parseFloat(graduatesMin);
      if (!isNaN(min)) {
        filtered = filtered.filter(
          (school) => school.percentageInWorkOrFurtherStudy >= min
        );
      }
    }
    if (graduatesMax) {
      const max = parseFloat(graduatesMax);
      if (!isNaN(max)) {
        filtered = filtered.filter(
          (school) => school.percentageInWorkOrFurtherStudy <= max
        );
      }
    }

    // Filter by Salary
    if (salaryMin) {
      const min = parseFloat(salaryMin);
      if (!isNaN(min)) {
        filtered = filtered.filter(
          (school) => school.averageGraduateSalary >= min
        );
      }
    }
    if (salaryMax) {
      const max = parseFloat(salaryMax);
      if (!isNaN(max)) {
        filtered = filtered.filter(
          (school) => school.averageGraduateSalary <= max
        );
      }
    }

    setFilteredSchools(filtered);
  }, [
    selectedSpecialties,
    selectedLocations,
    ratingMin,
    ratingMax,
    graduatesMin,
    graduatesMax,
    salaryMin,
    salaryMax,
    schools,
  ]);

  return (
    <div className="w-full px-6 py-4">
      <Filters
        count={filteredSchools.length}
        uniqueSpecialties={uniqueSpecialties}
        selectedSpecialties={selectedSpecialties}
        setSelectedSpecialties={setSelectedSpecialties}
        selectedLocations={selectedLocations}
        setSelectedLocations={setSelectedLocations}
        ratingMin={ratingMin}
        setRatingMin={setRatingMin}
        ratingMax={ratingMax}
        setRatingMax={setRatingMax}
        graduatesMin={graduatesMin}
        setGraduatesMin={setGraduatesMin}
        graduatesMax={graduatesMax}
        setGraduatesMax={setGraduatesMax}
        salaryMin={salaryMin}
        setSalaryMin={setSalaryMin}
        salaryMax={salaryMax}
        setSalaryMax={setSalaryMax}
      />
      <div className="self-stretch gap-10 flex flex-row items-start justify-center flex-wrap content-start text-[16.5px]">
        {filteredSchools.map((school) => (
          <CardSchool
            key={school.id + school.name}
            openPopup={() => openPopup(school.name)}
            school={school}
          />
        ))}
      </div>
      {filteredSchools.length === 0 && (
        <p className="mt-6 text-center text-gray-500">
          No schools match the selected filters.
        </p>
      )}
    </div>
  );
};

export default SchoolsResultsFilter;
