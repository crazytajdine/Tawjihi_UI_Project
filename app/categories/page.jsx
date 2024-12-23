"use client";
import { NavUpperbarre } from "../NavUpperbarre";
import { NavFooter } from "../NavFooter";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showJobs, setShowJobs] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        const data = await response.json();
        const formattedCategories = Object.entries(data).map(([key, value]) => ({
          name: key,
          ...value,
        }));
        setCategories(formattedCategories);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const allJobs = categories.flatMap((category) =>
      category.jobs.map((job) => ({
        ...job,
        categoryName: category.name,
      }))
    );

    let filteredJobs = allJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(query) ||
        job.short_description.toLowerCase().includes(query)
    );

    if (selectedCategory) {
      filteredJobs = filteredJobs.filter(
        (job) => job.categoryName === selectedCategory
      );
    }

    setJobs(filteredJobs);
    setShowJobs(query.trim() !== "" || selectedCategory !== "");
  };

  const handleCategoryFilter = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    const allJobs = categories.flatMap((c) =>
      c.jobs.map((job) => ({
        ...job,
        categoryName: c.name,
      }))
    );

    let filteredJobs = allJobs;

    if (category) {
      filteredJobs = filteredJobs.filter(
        (job) => job.categoryName === category
      );
    }

    if (searchQuery) {
      filteredJobs = filteredJobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery) ||
          job.short_description.toLowerCase().includes(searchQuery)
      );
    }

    setJobs(filteredJobs);
    setShowJobs(searchQuery.trim() !== "" || category !== "");
  };

  const handleCardClick = (categoryName) => {
    if (categoryName) {
      router.push(`/categories/${encodeURIComponent(categoryName)}`);
    } else {
      console.error("Category name is undefined");
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <NavUpperbarre />

      <div className="p-6">
        {/* Barre de recherche et filtre par catégorie */}
        <div className="mb-6 p-6 flex flex-col md:flex-row items-center gap-4 max-w-7xl mx-auto justify-center">
          <input
            type="text"
            placeholder="Rechercher un métier..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-[350px] md:w-1/2 lg:w-1/3 p-4 border rounded-md shadow-sm
                       focus:outline-none focus:ring focus:ring-blue-300"
          />
          <select
            value={selectedCategory}
            onChange={handleCategoryFilter}
            className="w-[50px] md:w-1/2 lg:w-1/3 p-4 border rounded-md shadow-sm
                       focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Toutes les catégories</option>
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Résultats : métiers ou catégories */}
        {!showJobs ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative rounded-lg shadow-lg overflow-hidden cursor-pointer"
                onClick={() => handleCardClick(category.name)}
              >
                <img
                  src={category.card_image}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h2 className="text-white text-xl font-bold">
                    {category.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, idx) => (
              <div key={idx} className="flex p-4 rounded-lg shadow-lg bg-white">
                <img
                  src={job.image || "/placeholder-image.jpg"}
                  alt={job.title}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div>
                  <h2 className="text-lg font-bold">{job.title}</h2>
                  <p className="text-gray-600 mt-2 text-sm">
                    {job.short_description}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Catégorie : {job.categoryName}
                  </p>
                </div>
              </div>
            ))}
            {jobs.length === 0 && (
              <p className="text-gray-500 text-center col-span-full">
                Aucun métier trouvé correspondant à votre recherche ou filtre.
              </p>
            )}
          </div>
        )}
      </div>

      <NavFooter />
    </div>
  );
}
