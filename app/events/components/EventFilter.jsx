import React, { useState } from 'react';
import styles from './EventFilter.module.css'; // Create this CSS module file

const EventFilter = ({ onFilter }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onFilter(query);
  };

  return (
    <div className={styles.filterContainer}>
      <label htmlFor="search" className={styles.label}>Search Events</label>
      <div className={styles.searchBar}>
        <input
          type="text"
          id="search"
          placeholder="Enter event name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleSearch} className={styles.button}>Search</button>
      </div>
    </div>
  );
};

export default EventFilter;
