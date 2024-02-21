import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'; // Updated import for NavLink
import './App.css';
import Introduction from './Components/Introduction';
import Service from './Components/Service';
import BMICalculator from './Components/BMICalculator';
// Assuming you have images placed in the `public` folder or imported
import introImage from './weights.png'; // Ensure correct relative path
import weightLossImage from './weights.png';
import muscleGrowthImage from './weights.png';
import beginnerLevelImage from './weights.png';
import advancedLevelImage from './weights.png';

function App() {
  return (
    <Router>
      <div>
        <header>
          <div className="container">
            <h1>Personal Trainer Services</h1>
            {/* Modernized navigation */}
            <nav className="nav">
              <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} end>Home</NavLink>
              <NavLink to="/bmi-calculator" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>BMI Calculator</NavLink>
              {/* Add more NavLink components for additional tabs as needed */}
            </nav>
          </div>
        </header>

        <div className="container">
          {/* Centralized route definitions */}
          <Routes>
            <Route path="/" element={
              <>
                <Introduction 
                  title="Welcome!"
                  text="I'm [Your Name], a certified personal trainer dedicated to helping you achieve your fitness goals. Whether you're looking to lose weight, build muscle, or improve your overall fitness, I offer personalized training plans tailored to your needs."
                  image={introImage}
                />
                <Service 
                  title="Weight Loss"
                  text="Customized training programs focused on fat loss, improving metabolism, and enhancing endurance."
                  image={weightLossImage}
                />
                <Service 
                  title="Muscle Growth"
                  text="Targeted workouts designed to increase muscle mass, strength, and power through progressive overload."
                  image={muscleGrowthImage}
                />
                <Service 
                  title="Beginner Level"
                  text="Foundational programs that introduce you to fitness, focusing on form, technique, and building a routine."
                  image={beginnerLevelImage}
                />
                <Service 
                  title="Advanced Level"
                  text="Advanced strategies and intense workouts aimed at those who want to push their limits and achieve peak performance."
                  image={advancedLevelImage}
                />
              </>
            } />
            <Route path="/bmi-calculator" element={<BMICalculator />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
