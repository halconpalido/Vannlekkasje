import React, { useState } from 'react';

function ComboBoxInput({ value, onChange }) {
  const options = [
    { value: '', text: '' },
    { value: '350', text: '1-krone' },
    { value: '450', text: '10-krone' },
    { value: '600', text: '20-krone' },
  ];

  const handleSelectChange = (event) => {
    onChange(event.target.value);
  };


  return (
    <div className='combo-box'>
      <input
        id='value-input'
        type="number"
        placeholder="0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <select onChange={handleSelectChange} value={value}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ComboBoxInput;
