"use client";

import React, { useState, useEffect } from "react";
import { NavUpperbarre } from "../NavUpperbarre";
import { NavFooter } from "../NavFooter";
import EventList from './components/EventList';
import EventFilter from './components/EventFilter';

import eventsData from '../../jsondb/Events.json';

const EventsPage = () => {
    const [filteredEvents, setFilteredEvents] = useState(eventsData);
  
    const handleFilter = (query) => {
      const filtered = eventsData.filter((event) =>
        event.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredEvents(filtered);
    };
  
    return (
      <div>
        <NavUpperbarre />
        <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>

          <EventFilter onFilter={handleFilter} />
          <EventList events={filteredEvents} />
        </main>
        <NavFooter />
      </div>
    );
  };
  
  export default EventsPage;
