import React from 'react';

const Input = ({ value, onChange }) => {
  return (
    <input
      type="number"
      id="derece"
      placeholder="Celcius"
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;