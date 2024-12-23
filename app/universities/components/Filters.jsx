// src/components/Filters.jsx
"use client";

import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5"; // Import the location icon
import { debounce } from "lodash"; // Import debounce from lodash

const Filters = ({
  count,
  uniqueSpecialties,
  selectedSpecialties,
  setSelectedSpecialties,
  selectedLocations,
  setSelectedLocations,
  ratingMin,
  setRatingMin,
  ratingMax,
  setRatingMax,
  graduatesMin,
  setGraduatesMin,
  graduatesMax,
  setGraduatesMax,
  salaryMin,
  setSalaryMin,
  salaryMax,
  setSalaryMax,
}) => {
  const [showFilters, setShowFilters] = useState(false);

  // States for Speciality Autocomplete
  const [specialityInput, setSpecialityInput] = useState("");
  const [specialitySuggestions, setSpecialitySuggestions] = useState([]);
  const [showSpecialitySuggestions, setShowSpecialitySuggestions] =
    useState(false);
  const specialitySuggestionsRef = useRef(null);

  // States for Location Autocomplete
  const [locationInput, setLocationInput] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
  const locationSuggestionsRef = useRef(null);

  // Debounced function to fetch location suggestions
  const fetchLocationSuggestions = useRef(
    debounce(async (text) => {
      if (text.trim() === "") {
        setLocationSuggestions([]);
        setShowLocationSuggestions(false);
        return;
      }

      try {
        const response = await axios.post("/api/other/location", { text });
        setLocationSuggestions(response.data);
        setShowLocationSuggestions(true);
      } catch (error) {
        console.error("Error fetching location suggestions:", error);
        setLocationSuggestions([]);
        setShowLocationSuggestions(false);
      }
    }, 300) // 300ms debounce delay
  ).current;

  const getUniversityLabel = () => {
    switch (true) {
      case count === 0:
        return "Aucune Université";
      case count === 1:
        return "Une Université";
      case count > 1:
        return `${count} Universités`;
      default:
        return "";
    }
  };

  // Handle input change for Speciality
  const handleSpecialityInputChange = (e) => {
    const value = e.target.value;
    setSpecialityInput(value);
    if (value.length > 0) {
      const filtered = uniqueSpecialties.filter((spec) =>
        spec.toLowerCase().includes(value.toLowerCase())
      );
      setSpecialitySuggestions(filtered);
      setShowSpecialitySuggestions(true);
    } else {
      setSpecialitySuggestions([]);
      setShowSpecialitySuggestions(false);
    }
  };

  // Handle suggestion click for Speciality
  const handleSpecialitySuggestionClick = (spec) => {
    if (!selectedSpecialties.includes(spec)) {
      setSelectedSpecialties([...selectedSpecialties, spec]);
    }
    setSpecialityInput("");
    setSpecialitySuggestions([]);
    setShowSpecialitySuggestions(false);
  };

  // Handle removal of selected speciality
  const handleRemoveSpeciality = (spec) => {
    setSelectedSpecialties(selectedSpecialties.filter((s) => s !== spec));
  };

  // Handle input change for Location with debounced API call
  const handleLocationInputChange = (e) => {
    const val = e.target.value;
    setLocationInput(val);
    fetchLocationSuggestions(val);
  };

  // Handle suggestion click for Location
  const handleLocationSuggestionClick = (suggestion) => {
    const selectedLocation = `${suggestion.city}, ${suggestion.country}`;
    if (!selectedLocations.includes(selectedLocation)) {
      setSelectedLocations([...selectedLocations, selectedLocation]);
    }
    setLocationInput("");
    setLocationSuggestions([]);
    setShowLocationSuggestions(false);
  };

  // Handle removal of selected location
  const handleRemoveLocation = (loc) => {
    setSelectedLocations(selectedLocations.filter((l) => l !== loc));
  };

  // Toggle filter panel visibility
  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedSpecialties([]);
    setSelectedLocations([]);
    setLocationInput("");
    setRatingMin("");
    setRatingMax("");
    setGraduatesMin("");
    setGraduatesMax("");
    setSalaryMin("");
    setSalaryMax("");
    setSpecialityInput("");
    setSpecialitySuggestions([]);
    setShowSpecialitySuggestions(false);
    setLocationSuggestions([]);
    setShowLocationSuggestions(false);
  };

  // Close Speciality suggestions dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        specialitySuggestionsRef.current &&
        !specialitySuggestionsRef.current.contains(event.target)
      ) {
        setShowSpecialitySuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close Location suggestions dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        locationSuggestionsRef.current &&
        !locationSuggestionsRef.current.contains(event.target)
      ) {
        setShowLocationSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full mb-6">
      <div className="w-full flex flex-col md:flex-row items-center justify-between transition-all duration-75 ease-in-out">
        {/* University Count */}
        <div className="mb-4 md:mb-0">
          <span className="text-lg font-semibold">{getUniversityLabel()}</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-row items-center space-x-4">
          {/* "Reset Filters" Button with Gradient Transition */}
          {(selectedSpecialties.length > 0 ||
            selectedLocations.length > 0 ||
            ratingMin ||
            ratingMax ||
            graduatesMin ||
            graduatesMax ||
            salaryMin ||
            salaryMax) && (
            <button
              type="button"
              onClick={resetFilters}
              className={`px-4 py-2 text-white rounded-md transition-all bg-red-600 duration-300 ease-in-out hover:to-red-700 ${
                showFilters &&
                "rounded-b-none bg-gradient-to-t to-10% from-gray-100 to-red-600  hover:to-red-700"
              }`}
            >
              Reset Filters
            </button>
          )}
          {/* "More Filters" / "Hide Filters" Button with Gradient Transition */}
          <button
            type="button"
            onClick={toggleFilters}
            className={`px-4 py-2 text-gray-800 rounded-md transition-all hover:bg-gray-300 bg-gray-200 duration-300 ease-in-out ${
              showFilters &&
              "rounded-b-none bg-gradient-to-t to-10% from-gray-100 to-gray-200  hover:to-gray-300"
            }
            `}
          >
            {showFilters ? "Hide Filters" : "More Filters"}
          </button>
        </div>
      </div>

      {/* Filter Panel with Animation */}
      <div
        className={`w-full bg-gray-100 p-6 rounded-md rounded-tr-none shadow-md transition-all duration-500 ease-in-out transform ${
          showFilters
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4 overflow-hidden pointer-events-none"
        }`}
      >
        {/* First Row: Location and Speciality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Filter by Location */}
          <div className="relative">
            <label
              htmlFor="locationInput"
              className="block mb-1 text-md font-medium text-gray-700"
            >
              Location
            </label>
            <input
              id="locationInput"
              value={locationInput}
              onChange={handleLocationInputChange}
              autoComplete="off"
              className="w-full p-2 border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Type to search..."
            />
            {showLocationSuggestions && locationSuggestions.length > 0 && (
              <ul
                ref={locationSuggestionsRef}
                className="absolute top-full w-full border border-gray-300 bg-white rounded shadow-md z-10 max-h-60 overflow-auto"
              >
                {locationSuggestions.map((suggestion, index) => (
                  <li
                    key={`${suggestion.city}-${suggestion.country}-${index}`}
                    onClick={() => handleLocationSuggestionClick(suggestion)}
                    className="p-2 flex items-center gap-4 hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="w-5 h-5">
                      <IoLocationSharp className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      {suggestion.city}, {suggestion.country}
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {/* Selected Locations */}
            {selectedLocations.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedLocations.map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium"
                  >
                    {loc}
                    <button
                      type="button"
                      onClick={() => handleRemoveLocation(loc)}
                      className="ml-2 text-green-500 hover:text-green-700 focus:outline-none"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Filter by Speciality */}
          <div className="relative">
            <label
              htmlFor="speciality"
              className="block text-md font-medium text-gray-700 mb-2"
            >
              Speciality
            </label>
            <input
              type="text"
              id="speciality"
              autoComplete="off"
              value={specialityInput}
              onChange={handleSpecialityInputChange}
              className="block w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type to search..."
              onFocus={() => {
                if (specialityInput.length > 0)
                  setShowSpecialitySuggestions(true);
              }}
            />
            {showSpecialitySuggestions && specialitySuggestions.length > 0 && (
              <ul
                ref={specialitySuggestionsRef}
                className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md max-h-60 overflow-auto shadow-lg"
              >
                {specialitySuggestions.map((spec) => (
                  <li
                    key={spec}
                    onClick={() => handleSpecialitySuggestionClick(spec)}
                    className="cursor-pointer px-4 py-2 hover:bg-blue-100"
                  >
                    {spec}
                  </li>
                ))}
              </ul>
            )}
            {/* Selected Specialities */}
            {selectedSpecialties.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedSpecialties.map((spec) => (
                  <span
                    key={spec}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium"
                  >
                    {spec}
                    <button
                      type="button"
                      onClick={() => handleRemoveSpeciality(spec)}
                      className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Second Row: Rating, Salary, Graduates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Filter by Rating */}
          <div>
            <label className="block text-md font-medium text-gray-700 mb-2">
              Rating
            </label>
            <div className="flex space-x-4">
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                placeholder="Min"
                value={ratingMin}
                onChange={(e) => setRatingMin(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                placeholder="Max"
                value={ratingMax}
                onChange={(e) => setRatingMax(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Filter by Salary */}
          <div>
            <label className="block text-md font-medium text-gray-700 mb-2">
              Average Graduate Salary ($)
            </label>
            <div className="flex space-x-4">
              <input
                type="number"
                min="0"
                placeholder="Min"
                value={salaryMin}
                onChange={(e) => setSalaryMin(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="number"
                min="0"
                placeholder="Max"
                value={salaryMax}
                onChange={(e) => setSalaryMax(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Filter by Graduates in Work or Further Study */}
          <div>
            <label className="block text-md font-medium text-gray-700 mb-2">
              Graduates in Work/Further Study (%)
            </label>
            <div className="flex space-x-4">
              <input
                type="number"
                min="0"
                max="100"
                placeholder="Min"
                value={graduatesMin}
                onChange={(e) => setGraduatesMin(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="number"
                min="0"
                max="100"
                placeholder="Max"
                value={graduatesMax}
                onChange={(e) => setGraduatesMax(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
