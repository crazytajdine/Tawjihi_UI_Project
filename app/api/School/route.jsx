import schools from "/jsondb/Schools.json";
import { NextResponse } from "next/server";

export async function GET(req) {
  const name = req.nextUrl.searchParams.get("name");
  const city = req.nextUrl.searchParams.get("city");
  const country = req.nextUrl.searchParams.get("country");

  // Filter schools based on query parameters
  const filteredSchools = schools.filter((school) => {
    return (
      (!name || school.name.toLowerCase().includes(name.toLowerCase())) &&
      (!city ||
        school.address.city.toLowerCase().includes(city.toLowerCase())) &&
      (!country ||
        school.address.country.toLowerCase().includes(country.toLowerCase()))
    );
  });

  return NextResponse.json(filteredSchools);
}
