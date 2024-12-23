"use client";

import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // for dateClick handling
import axios from "axios";
import { useRouter } from "next/navigation"; // Updated import

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [dayEvents, setDayEvents] = useState([]); // To store events for a specific day
  const router = useRouter();

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    const filteredEvents = events.filter(
      (event) =>
        new Date(event.start).toISOString().split("T")[0] === info.dateStr
    );
    setDayEvents(filteredEvents);
  };

  const handleEventClick = (info) => {
    const eventId = info.event.extendedProps.id;
    if (eventId) {
      router.push(`/event/${eventId}`); // Navigate to the event's page
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/Events");
        const formattedEvents = response.data.map((event) => ({
          id: event.id, // Event ID for routing
          title: event.title,
          start: event.date,
          end: event.endDate,
          allDay: true, // Spans the full day(s)
          backgroundColor: "var(--collection-1-BARR)", // Tailwind color variable
          borderColor: "#000000", // Solid black border
          textColor: "var(--collection-1-TEXT)", // Tailwind color variable for white text
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        University Calendar
      </h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        events={events}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
        height="auto"
        eventContent={(info) => (
          <div style={{ whiteSpace: "normal", padding: "4px" }}>
            <strong>{info.event.title}</strong>
          </div>
        )}
      />
      {selectedDate && (
        <div className="mt-4 text-gray-700">
          <h3 className="font-bold">Events on {selectedDate}:</h3>
          {dayEvents.length > 0 ? (
            <ul>
              {dayEvents.map((event) => (
                <li key={event.id}>
                  <strong>{event.title}</strong>
                </li>
              ))}
            </ul>
          ) : (
            <p>No events on this day.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Calendar;
