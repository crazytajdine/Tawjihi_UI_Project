import bourses from "/jsondb/bourses.json"; // Importe le fichier JSON
import { NextResponse } from "next/server";

export async function GET(req) {
  // Récupérer les paramètres de recherche (optionnels)
  const url = new URL(req.url);
  const search = url.searchParams.get("search") || "";
  const date = url.searchParams.get("date") || "";

  let result = bourses;

  // Filtrer par nom si le paramètre 'search' est fourni
  if (search) {
    result = result.filter((bourse) =>
      bourse.nom.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Filtrer par date limite si le paramètre 'date' est fourni
  if (date) {
    const filterDate = new Date(date);
    result = result.filter((bourse) => {
      if (!bourse.date_limite || bourse.date_limite === "DÃ©lai de candidature Ã©chu") {
        return false;
      }
      const bourseDate = new Date(bourse.date_limite);
      return bourseDate <= filterDate;
    });
  }

  return NextResponse.json(result);
}
