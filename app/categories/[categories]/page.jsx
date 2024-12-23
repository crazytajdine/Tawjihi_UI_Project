"use client";
import { NavUpperbarre } from "../../NavUpperbarre";
import { NavFooter } from "../../NavFooter";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams(); // Récupère les paramètres
  const categories = decodeURIComponent(params.categories); // Décodage du nom de la catégorie
  const [categoryData, setCategoryData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!categories) {
      router.push("/categories"); // Redirige si le paramètre est manquant
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

  const { main_image, description, jobs } = categoryData;

  return (
    <div className="w-full flex flex-col items-center gap-6">


      <NavUpperbarre></NavUpperbarre>
    <div className="p-6">
      {/* Image et description de la catégorie */}
      <div className="mb-8 text-center">
        <img
          src={main_image}
          alt={categories}
          className="w-full max-w-4xl mx-auto rounded-md shadow-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{categories}</h1> {/* Nom de catégorie décodé */}
        <p className="text-gray-600 text-lg">{description}</p>
      </div>

      {/* Liste des jobs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, idx) => (
          <div key={idx} className="flex p-4 rounded-lg shadow-lg bg-white">
            {/* Image du job */}
            <img
              src={job.image || "/placeholder-image.jpg"}
              alt={job.title}
              className="w-24 h-24 object-cover rounded-md mr-4"
            />
            {/* Contenu du job */}
            <div>
              <h2 className="text-lg font-bold">{job.title}</h2>
              <p className="text-gray-600 mt-2 text-sm">{job.short_description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      <NavFooter></NavFooter>
    </div>
  );
}
