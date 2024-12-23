import React from 'react';
import styles from './EventCard.module.css';

const EventCard = ({ event }) => {
  const formatDate = (date) => new Date(date).toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' });

  return (
    <div className={styles.eventCard}>
      <div className={styles.eventHeader}>
        <img src={event.logo} alt={`${event.title} logo`} className={styles.eventLogo} />
        <h2>{event.title}</h2>
      </div>
      <div className={styles.eventDetails}>
        <p><strong>Date:</strong> {formatDate(event.date)}</p>
        <p><strong>End Date:</strong> {formatDate(event.endDate)}</p>
        <p><strong>Participants:</strong> {event.inscrit}</p>
        <p><strong>Format:</strong> {event.isPresential}</p>
      </div>
      <div className={styles.eventActions}>
        <button className={styles.moreInfoButton}>More Info</button>
      </div>
    </div>
  );
};

export default EventCard;
