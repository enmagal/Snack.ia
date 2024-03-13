import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import ConnexionPage from "./pages/ConnexionPage";
import BusinessHome from "./pages/BusinessHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/connexion" element={<ConnexionPage />} />
          <Route path="/business" element={<BusinessHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
