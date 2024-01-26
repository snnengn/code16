import React from 'react';

const Button = ({ onClick, id, text }) => {
  return (
    <button
      onClick={onClick}
      id={id}
      type="button"
        >
      {text}
    </button>
  );
}

export default Button;