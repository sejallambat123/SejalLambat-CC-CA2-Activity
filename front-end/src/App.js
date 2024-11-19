import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from "./components/student"; // Set Student as the starting component
import Registration from "./components/student_registration"; // Correct path for Registration component


function App() {
  return (
    <Router> {/* Wrap the components with BrowserRouter */}
      <div>
        <Routes>
          {/* Define Routes for navigation */}
          <Route path="/" element={<Student />} /> {/* Starting page is Student */}
          <Route path="/student-registration" element={<Registration />} /> {/* Registration page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
