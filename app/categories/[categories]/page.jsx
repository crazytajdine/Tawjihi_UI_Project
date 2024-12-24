"use client";
import { NavUpperbarre } from "../../NavUpperbarre";
import { NavFooter } from "../../NavFooter";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams(); 
  const categories = decodeURIComponent(params.categories); 
  const [categoryData, setCategoryData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!categories) {
      router.push("/categories");
      return;
    }

    const fetchCategoryData = async () => {
      try {
        const response = await fetch(`/api/categories/${encodeURIComponent(categories)}`);
        if (response.ok) {
          const data = await response.json();
          setCategoryData(data);
        } else {
          router.push("/categories");
        }
      } catch (err) {
        console.error("Error fetching category data:", err);
      }
    };

    fetchCategoryData();
  }, [categories, router]);

  if (!categoryData) {
    return <p>Chargement...</p>;
  }

  // On ne récupère plus main_image car on ne l’affiche plus
  const { description, jobs } = categoryData;

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* Ne pas toucher */}
      <NavUpperbarre />

      <div className="p-6 w-full max-w-7xl mx-auto">
        {/* Titre et description de la catégorie, centrés */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">{categories}</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">{description}</p>
        </div>

        {/* Liste des jobs → 3 colonnes sur moyennes/grandes tailles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="
                bg-[var(--collection-1-main)] text-black
                p-4 rounded-lg shadow-lg
                transition-all duration-300
                flex flex-col gap-3
                hover:shadow-2xl hover:scale-[1.02]
              "
            >
              {/* Image du job, pas trop grande */}
              <img
                src={job.image || "/placeholder-image.jpg"}
                alt={job.title}
                className="w-full h-32 object-cover rounded-md"
              />
              {/* Contenu du job */}
              <h2 className="text-lg font-bold text-center">{job.title}</h2>
              <p className="text-sm">{job.short_description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ne pas toucher */}
      <NavFooter />
    </div>
  );
}
