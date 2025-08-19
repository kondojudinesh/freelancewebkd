import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateGig from "./pages/CreateGig";
import Gigs from "./pages/Gigs";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <Router>
      {/* Toast notification system */}
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-gig" element={<CreateGig />} />
        <Route path="/gigs" element={<Gigs />} />
      </Routes>
    </Router>
  );
};

export default App;
