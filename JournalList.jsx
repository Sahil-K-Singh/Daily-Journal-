import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JournalList = ({ userId, filters }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`http://localhost:5000/api/journal/getjournal?userId=${userId}`);
       console.log("Fetched entries:", res.data); 
      setEntries(res.data);
    };
    fetch();
  }, [userId]);

  const filtered = entries.filter((entry) => {
    const matchDate = filters.date
  ? new Date(entry.date).toISOString().slice(0, 10) === filters.date
  : true;

    const matchMood = filters.mood ? entry.mood === filters.mood : true;
    return matchDate && matchMood;
  });

  return (
    <div>
      <h2>Past Entries</h2>
      {filtered.map((e) => (
        <div key={e._id} className="entry-card">
          <p><strong>{new Date(e.date).toDateString()}</strong></p>
          <p>{e.content}</p>
          <p>Mood: {e.mood}</p>
        </div>
      ))}
    </div>
  );
};

export default JournalList;
