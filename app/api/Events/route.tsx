import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongodb";

export async function GET() {
  const db = await connectToDatabase();
  const res = await db
    .collection("school")
    .find({ name: "ensam" }, { projection: { _id: 0 } })
    .toArray();
  return NextResponse.json(res);
}
