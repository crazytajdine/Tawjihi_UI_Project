// pages/api/schools.ts
import School, { SchoolDocument } from "@/Models/school";
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  const db = await connectToDatabase();

  if (method == "POST") {
    const {
      name,
      abbreviation,
      location,
      establishmentYear,
      website,
      description,
      rating,
      registrationDates,
      fees,
      programs,
    } = req.body;

    // Validate required fields
    if (
      !name ||
      !abbreviation ||
      !location ||
      !establishmentYear ||
      !website ||
      !description ||
      rating === undefined ||
      !registrationDates ||
      !fees ||
      !programs
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    // Create new school document
    const newSchool: SchoolDocument = new School({
      name,
      abbreviation,
      location,
      establishmentYear,
      website,
      description,
      rating,
      registrationDates,
      fees,
      programs,
    });

    await newSchool.save();

    res.status(201).json({ success: true, data: newSchool });
  }
}
