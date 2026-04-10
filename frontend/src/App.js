import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ApplyJob from "./pages/ApplyJob";

function App() {

  const jobs = [
    { title: "Frontend Developer", company: "Google", location: "Remote" },
    { title: "Backend Developer", company: "Amazon", location: "Bangalore" },
    { title: "Full Stack Developer", company: "Microsoft", location: "Hyderabad" },
    { title: "React Developer", company: "Meta", location: "Remote" },
    { title: "Node.js Developer", company: "TCS", location: "Delhi" },
    { title: "Software Engineer", company: "Infosys", location: "Pune" },
  ];

  return (
    <Router>

      <div className="bg-gray-100 min-h-screen">

        {/* Navbar */}
        <nav className="bg-white shadow-md sticky top-0">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

            {/* Logo */}
            <h1 className="text-2xl font-bold text-blue-600">
              JobPortal
            </h1>

            {/* Menu Buttons */}
            <div className="flex gap-4">

              <Link
                to="/"
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Jobs
              </Link>

              <Link
                to="/login"
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500"
              >
                Register
              </Link>

              <Link
                to="/apply-job"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Apply Job
              </Link>

              {/* ✅ Profile Button Added */}
              <Link
                to="/profile"
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
              >
                Profile
              </Link>

            </div>

          </div>
        </nav>

        {/* Routes */}
        <Routes>

          <Route path="/" element={<Jobs jobs={jobs} />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/apply-job" element={<ApplyJob />} />

          <Route path="/profile" element={<Profile />} />

        </Routes>

      </div>

    </Router>
  );
}

export default App;