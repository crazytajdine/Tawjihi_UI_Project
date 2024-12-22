import React from "react";
import Calendar from "./components/Calendar";
import {NavFooter} from "../NavFooter"; // Adjust the path as per your folder structure
import {NavUpperbarre} from "../NavUpperbarre"; // Adjust the path as per your folder structure

const CalendarPage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">
      {/* Header */}
      <NavUpperbarre />

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto p-4">
        <Calendar />
      </main>

      {/* Footer */}
      <NavFooter />
    </div>
  );
};

export default CalendarPage;

