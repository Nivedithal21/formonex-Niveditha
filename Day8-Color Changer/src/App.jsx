import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#ff0000');
  const [name, setName] = useState('');

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="color-picker">
      <h1>Color Picker</h1>

      <input
        type="text" value={name} onChange={handleNameChange}
        placeholder="Select Color"
        className="name-input"
      />

      <input
        type="color" value={color} onChange={handleColorChange}
        className="color-input"
      />

      <p className="label">Preview:</p>

      <div className="preview" style={{ color: color }}>
        {name || 'Select Here'}
      </div>
    </div>
  );
}

export default App;