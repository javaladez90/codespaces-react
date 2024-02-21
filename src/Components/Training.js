import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BMICalculator from './BMICalculator'; // Import your BMI calculator component

function App() {
  return (
    <Router>
      <div>
        {/* Other links and content */}
        <nav>
          <ul>
            <li><Link to="/bmi-calculator">BMI Calculator</Link></li>
            {/* Other navigation links */}
          </ul>
        </nav>
        {/* Switch between different routes */}
        <Switch>
          <Route path="/bmi-calculator" component={BMICalculator} />
          {/* Define other routes */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
