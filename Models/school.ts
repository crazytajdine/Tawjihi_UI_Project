import mongoose, { Document, Model, Schema } from "mongoose";

export interface Program {
  programName: string;
  diploma: string;
  specializations: string[];
  duration: number;
  description: string;
}

export interface SchoolDocument extends Document {
  name: string;
  abbreviation: string;
  location: string;
  establishmentYear: number;
  website: string;
  description: string;
  rating: number;
  registrationDates: {
    start: string;
    end: string;
  };
  fees: number;
  programs: Program[];
  createdAt: Date;
  updatedAt: Date;
}

const ProgramSchema = new Schema<Program>(
  {
    programName: { type: String, required: true },
    diploma: { type: String, required: true },
    specializations: { type: [String], required: true },
    duration: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { _id: false }
);

const SchoolSchema = new Schema<SchoolDocument>(
  {
    name: { type: String, required: true },
    abbreviation: { type: String, required: true },
    location: { type: String, required: true },
    establishmentYear: { type: Number, required: true },
    website: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    registrationDates: {
      start: { type: String, required: true },
      end: { type: String, required: true },
    },
    fees: { type: Number, required: true },
    programs: { type: [ProgramSchema], required: true },
  },
  { timestamps: true }
);

const School: Model<SchoolDocument> =
  mongoose.models.School || mongoose.model<SchoolDocument>("School", SchoolSchema);

export default School;
