import categories from "/jsondb/categories.json"; // Importe le fichier JSON
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = req.nextUrl;
  const searchQuery = searchParams.get("search")?.toLowerCase();
  const filterCategory = searchParams.get("category");

  let results = Object.entries(categories).map(([key, value]) => ({
    name: key,
    ...value,
  }));

  // Filtrer par catégorie
  if (filterCategory) {
    results = results.filter((category) => category.name === filterCategory);
  }

  // Filtrer par recherche
  if (searchQuery) {
    results = results.filter((category) =>
      category.jobs.some((job) =>
        job.title.toLowerCase().includes(searchQuery) ||
        job.short_description.toLowerCase().includes(searchQuery)
      )
    );
  }

  return NextResponse.json(results);
}
