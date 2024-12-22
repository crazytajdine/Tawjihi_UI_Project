"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // for dateClick handling

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    alert(`You selected ${info.dateStr}`);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        University Calendar
      </h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={[
          { title: "Webinar 1", date: "2024-12-25" },
          { title: "Entrance Exam", date: "2024-12-28" },
          { title: "Orientation Event", date: "2024-12-30" },
        ]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
        height="auto"
      />
      {selectedDate && (
        <div className="mt-4 text-gray-700">
          <strong>Selected Date:</strong> {selectedDate}
        </div>
      )}
    </div>
  );
};

export default Calendar;
