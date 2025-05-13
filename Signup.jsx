import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({ onSignup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSignup = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/user/signup', {
        name,
        email,
        password,
      });
      alert('Signup successful! You can now log in.');
      setIsRegistered(true);
    } catch (err) {
      alert('Signup failed: ' + err.response?.data?.error || err.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleSignup}>Sign Up</button>

      {isRegistered && (
        <p style={{ color: 'green' }}>
          ✅ Successfully registered! Please log in.
        </p>
      )}
    </div>
  );
};

export default Signup;
