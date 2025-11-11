// ✅ All imports should come first
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Classifier from "./pages/Classifier";
import Dashboard from "./pages/Dashboard";
import MapPage from "./pages/MapPage";
import Learn from "./pages/Learn";
import Leaderboard from "./pages/Leaderboard";
import Admin from "./pages/Admin";
import "./App.css"; // keep this at the very end of imports

// ✅ After imports, your code starts
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classify" element={<Classifier />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
