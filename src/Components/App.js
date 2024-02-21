import React from 'react';
import './App.css'; // Assumes you have styles in App.css
import Introduction from './Introduction';
import Service from './Service';
// Assuming you have images placed in the `public` folder or imported
import introImage from '/workspaces/codespaces-react/src/weights.png';
import weightLossImage from '/workspaces/codespaces-react/src/weights.png';
import muscleGrowthImage from '/workspaces/codespaces-react/src/weights.png';
import beginnerLevelImage from '/workspaces/codespaces-react/src/weights.png';
import advancedLevelImage from '/workspaces/codespaces-react/src/weights.png';

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Personal Trainer Services</h1>
        </div>
      </header>

      <div className="container">
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
      </div>
    </div>
  );
}

export default App;
