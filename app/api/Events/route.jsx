import events from "/jsondb/Events.json";
import { NextResponse } from "next/server";

export async function GET(req) {
  const count = parseInt(req.nextUrl.searchParams.get("count"));
  const res = Number.isNaN(count) ? events : events.slice(0, count);
  return NextResponse.json(res);
}
