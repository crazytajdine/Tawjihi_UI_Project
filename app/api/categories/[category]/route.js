import categories from "/jsondb/categories.json"; // Importe le fichier JSON
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { category } = params;

  if (!category) {
    return NextResponse.json({ error: "Category parameter is missing" }, { status: 400 });
  }

  const normalizedCategory = decodeURIComponent(category);
  const categoryData = categories[normalizedCategory];

  if (!categoryData) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  return NextResponse.json(categoryData);
}
