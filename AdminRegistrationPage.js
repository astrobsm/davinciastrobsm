import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerAdmin } from '../utils/auth';

function AdminRegistrationPage() {
  const [details, setDetails] = useState({ name: '', email: '', phone: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerAdmin(details);
      setMessage(`Registration successful. Redirecting to dashboard...`);
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000); // 2 seconds delay
    } catch (error) {
      setMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Admin Register</h2>
      <form onSubmit={handleRegister} className="form">
        <input
          type="text"
          placeholder="Full Name"
          value={details.name}
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={details.email}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={details.phone}
          onChange={(e) => setDetails({ ...details, phone: e.target.value })}
          required
        />
        <button type="submit">Register</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
}

export default AdminRegistrationPage;