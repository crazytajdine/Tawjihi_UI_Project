import React from 'react';
import styles from './EventList.module.css'; // Import the CSS module
import EventCard from './EventCard';

const EventList = ({ events }) => {
  if (!events.length) {
    return <p>No events available at the moment.</p>;
  }

  return (
    <div className={styles.eventList}>
      {events.map((event) => (
        <div className={styles.eventCard} key={event.id}>
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
};

export default EventList;
