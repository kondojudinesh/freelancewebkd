import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateGig from "./pages/CreateGig";
import Gigs from "./pages/Gigs";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

// ✅ added
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-gig" element={<CreateGig />} />
            <Route path="/gigs" element={<Gigs />} />
          </Routes>
        </main>
        <Footer />
      </div>

      {/* ✅ Toast notifications container */}
      <Toaster position="top-right" reverseOrder={false} />
    </Router>
  );
}

export default App;
