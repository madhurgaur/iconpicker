import React from 'react';
import { useNavigate } from 'react-router-dom';

function IconButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/icons');
  };

  return (
    <button onClick={handleClick}>
      Select Icon
    </button>
  );
}

export default IconButton;


