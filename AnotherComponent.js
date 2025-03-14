import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnotherComponent = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/some-route');
  };

  return (
    <div>
      <button onClick={handleNavigation}>Go to Some Route</button>
    </div>
  );
};

export default AnotherComponent;