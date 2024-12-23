// src/components/GetProspectusPopup.jsx
"use client";

import React from "react";

const GetProspectusPopup = ({ onClose, schoolname }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out overflow-y-auto">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mt-10 relative transform transition-transform duration-300 ease-in-out">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none"
          aria-label="Close Prospectus Popup"
        >
          &times;
        </button>

        {/* Header */}
        <h2 className="text-xl font-bold mb-4 text-yellow-500 text-center">
          Get Prospectus for {schoolname}
        </h2>

        {/* Form */}
        <form>
          {/* Start Date */}
          <div className="mt-4">
            <label
              htmlFor="startDate"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              When would you like to start?<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="startDate"
              required
              className="w-full px-3 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Checkboxes */}
          <div className="mt-4">
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" required />
              <span className="text-sm text-gray-700">
                Receive newsletters to stay informed of the latest updates.
              </span>
            </label>
          </div>
          <div className="mt-2">
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" required />
              <span className="text-sm text-gray-700">
                I consent to the processing of my data as outlined in the terms and
                conditions.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetProspectusPopup;
