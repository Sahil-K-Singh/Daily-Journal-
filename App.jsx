import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import JournalForm from './components/JournalForm';
import JournalList from './components/JournalList';
import Filters from './components/Filters';
import './style.css';

function App() {
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [filters, setFilters] = useState({ date: '', mood: '' });
  const [isSignup, setIsSignup] = useState(false);

  const handleLogin = (id) => {
    localStorage.setItem('userId', id);
    setUserId(id);
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setUserId(null);
  };

  return (
    <div className="App">
      <h1>📝 Daily Journal</h1>

      {!userId ? (
        <div>
          {isSignup ? (
            <Signup onSignup={() => setIsSignup(false)} />
          ) : (
            <Login onLogin={handleLogin} />
          )}
          <button onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
          </button>
        </div>
      ) : (
        <div>
          <button onClick={handleLogout} style={{ float: 'right' }}>Logout</button>
          <JournalForm userId={userId} />
          <Filters filters={filters} setFilters={setFilters} />
          <JournalList userId={userId} filters={filters} />
        </div>
      )}
    </div>
  );
}

export default App;
