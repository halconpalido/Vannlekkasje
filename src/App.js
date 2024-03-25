import React, { useState } from 'react';
import ComboBoxInput from './ComboBox';
import './App.css';


function App() {
  return (
      <div className="App">
          <Calculator />
      </div>
  );
}


function Calculator() {
  const [area, setArea] = useState("");
  const [costPerCubicMeter, setCostPerCubicMeter] = useState(0.5);

  const waterPressureOptions = [
    { value: 0.6, label: <>0,2 MPa (2 kp/cm<sup>2</sup>)</> },
    { value: 0.9, label: <>0,4 MPa (4 kp/cm<sup>2</sup>)</> },
    { value: 1, label: <>0,5 MPa (5 kp/cm<sup>2</sup>)</> },
    { value: 1.1, label: <>0,6 MPa (6 kp/cm<sup>2</sup>)</> },
    { value: 1.3, label: <>0,8 MPa (8 kp/cm<sup>2</sup>)</> },
    { value: 1.4, label: <>1 MPa (10 kp/cm<sup>2</sup>)</> }
  ];  

  const [waterPressure, setWaterPressure] = useState(waterPressureOptions[2].value);

  const volumePerSecond = (area / 60) * waterPressure;
  const formattedVolumePerSecond = volumePerSecond.toLocaleString('nb-NO', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const volumePerMinute = area * waterPressure;
  const formattedVolumePerMinute = volumePerMinute.toLocaleString('nb-NO', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const volumePerHour = ((area / 1000) * 60) * waterPressure;
  const formattedVolumePerHour = volumePerHour.toLocaleString('nb-NO', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const volumePerDay = (volumePerHour * 24) * waterPressure;
  const formattedVolumePerDay = volumePerDay.toLocaleString('nb-NO', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const volumePerAnnum = (volumePerDay * 365) * waterPressure;
  const formattedVolumePerAnnum = volumePerAnnum.toLocaleString('nb-NO', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const annualCost = volumePerAnnum * costPerCubicMeter;
  const formattedAnnualCost = annualCost.toLocaleString('nb-NO', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  

  return (
      <div className='container'>
          <h1>Lekkasjekalkulator</h1>
          <div className='calculation-area'>
              <div id='areal-label'>
                <div>Lekkasjens Areal (mm<sup>2</sup>)</div>
                <div>
                <ComboBoxInput value={area} onChange={(value) => setArea(value)} />
                </div>
              </div>
              <div className="water-pressure-selection">
              <label htmlFor="waterPressure">Vanntrykk</label>
              <select
                name="waterPressure"
                id="waterPressure"
                value={waterPressure}
                onChange={(e) => setWaterPressure(e.target.value)}
              >
                {waterPressureOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
              
          </div>
          <div className="utregning">
            <h3>Lekkasjens utstrømsvolum:</h3>

              <p>Per sekund: {formattedVolumePerSecond} liter</p>
              <p>Per minutt: {formattedVolumePerMinute} liter</p>
              <p>Per time: {formattedVolumePerHour} m<sup>3</sup></p>
              <p>Per døgn: {formattedVolumePerDay} m<sup>3</sup></p>
              <p>Per år: {formattedVolumePerAnnum} m<sup>3</sup></p>
              <h3 id='annum-cost'>Årskostnad</h3>
              <label id='pris-label'>
                  <div id='kroner-per-m'>
                      <p>Kroner per m<sup>3</sup>:</p>
                  </div>
                  <div id='kroner-input'>
                      <input type="number" value={costPerCubicMeter} onChange={e => setCostPerCubicMeter(e.target.value)} />
                  </div>             
              </label>
              <p id='total-cost'>{formattedAnnualCost} kr</p>
          </div>
          <div className='footer'>
            <p>Av <a href="https://sfkarlsen.no" target="_blank" rel="noopener noreferrer">Sveinung Karlsen</a></p>
          </div>
      </div>
  );
}


export default App;
