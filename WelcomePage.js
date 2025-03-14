import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  const handleAdminRegister = () => {
    navigate('/admin-register');
  };

  return (
    <div className="container">
      <h1>Welcome to Davinci App</h1>
      <p>This platform allows you to manage products, generate invoices, and view reports.</p>
      <button onClick={handleRegister}>Register as User</button>
      <button onClick={handleAdminRegister}>Register as Admin</button>
    </div>
  );
}

export default WelcomePage;