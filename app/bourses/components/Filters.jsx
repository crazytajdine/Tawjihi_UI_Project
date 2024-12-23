import React from "react";

export default function Filters({
  searchTerm,
  setSearchTerm,
  filterDate,
  setFilterDate,
  onSearch,
  onFilterDate,
}) {
  return (
    <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-4">
      {/* Recherche par nom */}
      <div className="flex flex-col md:flex-row items-center gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Rechercher par nom..."
          className="border border-gray-300 rounded-md p-2 w-full md:w-auto"
        />
        <button
          onClick={onSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Rechercher
        </button>
      </div>

      {/* Filtrer par date */}
      <div className="flex flex-col md:flex-row items-center gap-2">
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full md:w-auto"
        />
        <button
          onClick={onFilterDate}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Filtrer par date
        </button>
      </div>
    </div>
  );
}
