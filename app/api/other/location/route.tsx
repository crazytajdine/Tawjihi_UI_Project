import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text } = await req.json();

  const API_KEY_AUTOCOMPLETE_MAP = process.env.API_KEY_AUTOCOMPLETE_MAP || "";

  const cf = {
    method: "get",
    url: `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&apiKey=${API_KEY_AUTOCOMPLETE_MAP}`,
    headers: {},
  };
  const res = await axios(cf);
  const data = res.data.features;
  const response: { city: string; country: string }[] = [];
  data.forEach((res: any) => {
    const city = res.properties.city;
    const country = res.properties.country;

    response.push({ city, country });
  });
  return NextResponse.json(response);
}
