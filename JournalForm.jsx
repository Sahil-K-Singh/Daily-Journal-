import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';

const JournalForm = ({ userId }) => {
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('😊 Happy');
  const [date, setDate] = useState(new Date());

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/journal/postjournal', {
        userId,
        date: date.toISOString().split('T')[0],
        content,
        mood,
      });
      alert('Entry added!');
      setContent('');
    } catch (err) {
      alert('Error posting journal');
    }
  };

  return (
    <div>
      <h2>Add Entry</h2>
      <DatePicker selected={date} onChange={setDate} />
      <br />
      <textarea rows={4} placeholder="Write your thoughts..." value={content} onChange={(e) => setContent(e.target.value)} />
      <br />
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option>😊 Happy</option>
        <option>😢 Sad</option>
        <option>😠 Angry</option>
        <option>😴 Tired</option>
        <option>😎 Confident</option>
      </select>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default JournalForm;
