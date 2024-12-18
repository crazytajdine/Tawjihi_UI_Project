"use client";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { NavUpperbarre } from "../components/NavUpperbarre";
import { NavFooter } from "../components/NavFooter";
import axios from "axios";
import { FormValues } from "./types";
import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

const AddSchool: React.FC = () => {
  const [suggestions, setSuggestions] = useState<
    { city: string; country: string }[]
  >([]);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      abbreviation: "",
      location: "",
      establishmentYear: new Date().getFullYear(),
      website: "",
      description: "",
      rating: 0,
      registrationDates: {
        start: "",
        end: "",
      },
      fees: 0,
      programs: [
        {
          programName: "",
          diploma: "",
          specializations: [""],
          duration: 0,
          description: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "programs",
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log(data);
      alert("School added successfully!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Failed to add school.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <NavUpperbarre />
      <main className="flex-grow container mx-auto p-4">
        {/* Form Container */}
        <div className="bg-collection-1-main p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-collection-1-TEXT">
            Add New Post-Bac School
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-collection-1-TEXT">
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  onChange={(e) => {
                    const abbreviation = document.getElementById(
                      "abbreviationinp"
                    ) as HTMLInputElement | null;
                    const value = e.target.value;
                    if (abbreviation) {
                      const words = value
                        .split(/(?=[A-Z])|\s+/)
                        .filter((word) => word !== "");
                      let abbr = "";
                      words.forEach((word) => {
                        if (word == "") return;
                        abbr += word[0].toUpperCase();
                      });
                      abbreviation.value = abbr;
                    }
                  }}
                  className="w-full p-2 border border-collection-1-main rounded bg-white text-collection-1-TEXT"
                  type="text"
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <label className="block mb-1 text-collection-1-TEXT">
                  Abbreviation
                </label>
                <input
                  id="abbreviationinp"
                  {...register("abbreviation", { required: true })}
                  className="w-full p-2 border border-collection-1-main rounded bg-white text-collection-1-TEXT"
                  type="text"
                />
                {errors.abbreviation && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block mb-1 text-collection-1-TEXT">
                  Location
                </label>
                <input
                  {...register("location", { required: true })}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val.length != 0) return;
                    const cf = {
                      method: "post",
                      url: `/api/other/location`,
                      headers: { "Content-Type": "application/json" },
                      data: { text: val },
                    };
                    axios(cf)
                      .then((res) => {
                        setSuggestions(res.data);
                      })
                      .catch(() => {
                        setSuggestions([]);
                      });
                  }}
                  className="w-full p-2 border border-collection-1-main rounded bg-white text-collection-1-TEXT"
                  type="text"
                />
                {suggestions.length > 0 && (
                  <ul className="absolute top-full w-full border border-gray-300 bg-white rounded shadow-md z-10">
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          // Set the input value to the clicked suggestion
                          const location = `${suggestion.city}, ${suggestion.country}`;
                          document.querySelector<HTMLInputElement>(
                            "input[name='location']"
                          )!.value = location;
                          setSuggestions([]); // Clear suggestions after selection
                        }}
                        className="p-2 flex w-full align-middle items-center gap-4 hover:bg-gray-100 cursor-pointer"
                      >
                        <div className="w-5 h-5">
                          <IoLocationSharp className="w-5 h-5" />
                        </div>
                        <div>
                          {suggestion.city}, {suggestion.country}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                {errors.location && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <label className="block mb-1 text-collection-1-TEXT">
                  Establishment Year
                </label>
                <input
                  {...register("establishmentYear", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  className="w-full p-2 border border-collection-1-main rounded bg-white text-collection-1-TEXT"
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()}
                />
                {errors.establishmentYear && (
                  <span className="text-red-500">Invalid year</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-collection-1-TEXT">
                  Website
                </label>
                <input
                  {...register("website", {
                    required: true,
                    pattern: /^(ftp|http|https):\/\/[^ "]+$/,
                  })}
                  className="w-full p-2 border border-collection-1-main rounded bg-white text-collection-1-TEXT"
                  type="url"
                />
                {errors.website?.type === "required" && (
                  <span className="text-red-500">This field is required</span>
                )}
                {errors.website?.type === "pattern" && (
                  <span className="text-red-500">Invalid URL</span>
                )}
              </div>
              <div>
                <label className="block mb-1 text-collection-1-TEXT">
                  Description
                </label>
                <textarea
                  {...register("description", { required: true })}
                  className="w-full p-2 border border-collection-1-main rounded bg-white text-collection-1-TEXT"
                  rows={4}
                ></textarea>
                {errors.description && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-collection-1-TEXT">
                  Rating (1-5)
                </label>
                <input
                  {...register("rating", {
                    required: true,
                    min: 1,
                    max: 5,
                    valueAsNumber: true,
                  })}
                  className="w-full p-2 border border-collection-1-main rounded bg-white text-collection-1-TEXT"
                  type="number"
                  min="1"
                  max="5"
                />
                {errors.rating?.type === "required" && (
                  <span className="text-red-500">This field is required</span>
                )}
                {(errors.rating?.type === "min" ||
                  errors.rating?.type === "max") && (
                  <span className="text-red-500">
                    Rating must be between 1 and 5
                  </span>
                )}
              </div>
              <div>
                <label className="block mb-1 text-collection-1-TEXT">
                  Fees (MAD per year)
                </label>
                <input
                  {...register("fees", { required: true, valueAsNumber: true })}
                  className="w-full p-2 border border-collection-1-main rounded bg-white text-collection-1-TEXT"
                  type="number"
                  min="0"
                />
                {errors.fees && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            {/* Registration Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-collection-1-TEXT">
                  Registration Start Date
                </label>
                <input
                  {...register("registrationDates.start", { required: true })}
                  className="w-full p-2 border border-collection-1-main rounded bg-white text-collection-1-TEXT"
                  type="date"
                />
                {errors.registrationDates?.start && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <label className="block mb-1 text-collection-1-TEXT">
                  Registration End Date
                </label>
                <input
                  {...register("registrationDates.end", { required: true })}
                  className="w-full p-2 border border-collection-1-main rounded bg-white text-collection-1-TEXT"
                  type="date"
                />
                {errors.registrationDates?.end && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-collection-1-TEXT">
                Programs
              </h3>
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="border border-collection-1-main p-4 mb-4 rounded bg-white"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium text-collection-1-TEXT">
                      Program {index + 1}
                    </h4>
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1 text-collection-1-TEXT">
                        Program Name
                      </label>
                      <input
                        {...register(`programs.${index}.programName` as const, {
                          required: true,
                        })}
                        className="w-full p-2 border border-collection-1-main rounded bg-white text-collection-1-TEXT"
                        type="text"
                      />
                      {errors.programs?.[index]?.programName && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="block mb-1 text-collection-1-TEXT">
                        Diploma
                      </label>
                      <input
                        {...register(`programs.${index}.diploma` as const, {
                          required: true,
                        })}
                        className="w-full p-2 border border-collection-1-main rounded bg-white text-collection-1-TEXT"
                        type="text"
                      />
                      {errors.programs?.[index]?.diploma && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block mb-1 text-collection-1-TEXT">
                        Specializations (comma separated)
                      </label>
                      <input
                        {...register(
                          `programs.${index}.specializations` as const,
                          { required: true }
                        )}
                        className="w-full p-2 border border-collection-1-main rounded bg-white text-collection-1-TEXT"
                        type="text"
                        placeholder="e.g., Web Development, AI, Cloud Computing"
                      />
                      {errors.programs?.[index]?.specializations && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="block mb-1 text-collection-1-TEXT">
                        Duration (years)
                      </label>
                      <input
                        {...register(`programs.${index}.duration` as const, {
                          required: true,
                          valueAsNumber: true,
                        })}
                        className="w-full p-2 border border-collection-1-main rounded bg-white text-collection-1-TEXT"
                        type="number"
                        min="1"
                      />
                      {errors.programs?.[index]?.duration && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block mb-1 text-collection-1-TEXT">
                      Description
                    </label>
                    <textarea
                      {...register(`programs.${index}.description` as const, {
                        required: true,
                      })}
                      className="w-full p-2 border border-collection-1-main rounded bg-white text-collection-1-TEXT"
                      rows={3}
                    ></textarea>
                    {errors.programs?.[index]?.description && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  append({
                    programName: "",
                    diploma: "",
                    specializations: [""],
                    duration: 0,
                    description: "",
                  })
                }
                className="px-4 py-2 bg-collection-1-main text-collection-1-TEXT rounded hover:bg-collection-1-secondary"
              >
                Add Program
              </button>
            </div>

            {/* Custom Fields */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-collection-1-TEXT">
                Custom Fields
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-collection-1-TEXT">
                    Industry Connections
                  </label>
                  <select
                    {...register("customFields.industryConnections")}
                    className="w-full p-2 border border-collection-1-main rounded bg-white text-collection-1-TEXT"
                  >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-collection-1-TEXT">
                    Certifications Offered (comma separated)
                  </label>
                  <input
                    {...register("customFields.certificationsOffered")}
                    className="w-full p-2 border border-collection-1-main rounded bg-white text-collection-1-TEXT"
                    type="text"
                    placeholder="e.g., Cisco, Microsoft Certified"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-collection-1-main text-collection-1-TEXT rounded hover:bg-collection-1-secondary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
      <NavFooter />
    </div>
  );
};

export default AddSchool;
