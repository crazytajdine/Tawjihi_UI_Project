import schools from "/jsondb/Schools.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(schools);
}
