import React from 'react';

const Filters = ({ filters, setFilters }) => {
  return (
    <div>
      <h3>Filter Entries</h3>
      <input
        type="date"
        value={filters.date}
        onChange={(e) => setFilters((f) => ({ ...f, date: e.target.value }))}
      />
      <select
        value={filters.mood}
        onChange={(e) => setFilters((f) => ({ ...f, mood: e.target.value }))}
      >
        <option value="">All Moods</option>
        <option value="😊 Happy">😊 Happy</option>
        <option value="😢 Sad">😢 Sad</option>
        <option value="😠 Angry">😠 Angry</option>
        <option value="😴 Tired">😴 Tired</option>
        <option value="😎 Confident">😎 Confident</option>
      </select>
    </div>
  );
};

export default Filters;
