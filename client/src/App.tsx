import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Gigs from "./pages/Gigs";
import CreateGig from "./pages/CreateGig"; // if you already have
import Dashboard from "./pages/Dashboard"; // if you already have
import ProtectedRoute from "./utils/ProtectedRoute"; // new file you'll create

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/gigs" element={<Gigs />} />

              {/* Example: Freelancer-only page */}
              <Route
                path="/create-gig"
                element={
                  <ProtectedRoute role="freelancer">
                    <CreateGig />
                  </ProtectedRoute>
                }
              />

              {/* Example: Any logged-in user */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
          {/* Notifications */}
          <Toaster position="top-center" />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
