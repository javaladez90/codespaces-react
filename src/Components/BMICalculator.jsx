import React, { useState } from 'react';
// Add this if you're using a separate CSS file for the component
// import './BMICalculator.css';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [unit, setUnit] = useState('metric'); // 'metric' or 'imperial'
  const [bmi, setBmi] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    let calculatedBMI;
    if (unit === 'metric') {
      calculatedBMI = weight / ((height / 100) ** 2);
    } else {
      calculatedBMI = (weight / (height ** 2)) * 703;
    }
    setBmi(calculatedBMI.toFixed(2));
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
    setWeight('');
    setHeight('');
    setBmi('');
  };

  return (
    <div className="bmi-calculator-container">
      <h2>BMI Calculator</h2>
      <form onSubmit={calculateBMI} className="bmi-form">
        <div>
          <label>Unit:</label>
          <select value={unit} onChange={handleUnitChange} className="input">
            <option value="metric">Metric (kg, cm)</option>
            <option value="imperial">Imperial (lb, in)</option>
          </select>
        </div>
        <div>
          <label>Weight ({unit === 'metric' ? 'kg' : 'lb'}):</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="input" />
        </div>
        <div>
          <label>Height ({unit === 'metric' ? 'cm' : 'in'}):</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="input" />
        </div>
        <button type="submit" className="submit-btn">Calculate BMI</button>
      </form>
      {bmi && <p className="bmi-result">Your BMI is: {bmi}</p>}
    </div>
  );
}

export default BMICalculator;
