import React, { useState } from 'react';
import './App.css';


function App() {
  return (
      <div className="App">
          <Calculator />
      </div>
  );
}


function Calculator() {
  const [area, setArea] = useState(0);
  const [costPerCubicMeter, setCostPerCubicMeter] = useState(0.5); // Default value

  const volumePerSecond = calculateVolumePerSecond(area);
  const volumePerMinute = area; // Assuming area is volume per minute for simplicity
  const volumePerHour = (area / 1000) * 60;
  const volumePerDay = volumePerHour * 24;
  const volumePerAnnum = volumePerDay * 365;
  const annualCost = volumePerAnnum * costPerCubicMeter;

  function calculateVolumePerSecond(area) {
      return area / 60;
  }

  return (
      <div>
          <h1>Vannlekkasje</h1>
          <div className='calculation-area'>
              <label id='areal-label'>
                <div>Lekkasjens Areal (mm<sup>2</sup>)</div>
                <div>
                  <input type="number" value={area} onChange={e => setArea(e.target.value)} />
                </div>
              </label>
              
          </div>
          <div className="utregning">
            <h3>Lekkasjens utstrømsvolum ved vanntrykk 0,5 MPa (5 kp/cm<sup>2</sup>):</h3>
              {/* Display Calculations */}
              <p>liter/sek: {volumePerSecond.toFixed(2)}</p>
              <p>liter/min: {volumePerMinute}</p>
              <p>m<sup>3</sup>/time: {volumePerHour.toFixed(2)}</p>
              <p>m<sup>3</sup>/døgn: {volumePerDay.toFixed(2)}</p>
              <p>m<sup>3</sup>/år: {volumePerAnnum.toFixed(0)}</p>
              <h3 id='annum-cost'>Årskostnad</h3>
              <label id='pris-label'>
                  <div>
                      Kroner per m<sup>3</sup>:
                  </div>
                  <div>
                      <input type="number" value={costPerCubicMeter} onChange={e => setCostPerCubicMeter(e.target.value)} />
                  </div>             
              </label>
              <p>{annualCost.toFixed(0)} kr</p>
          </div>
          <div className='footer'>
            <p>Av Sveinung Karlsen</p>
          </div>
      </div>
  );
}


export default App;
