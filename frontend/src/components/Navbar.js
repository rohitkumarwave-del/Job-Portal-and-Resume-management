// src/components/Navbar.js
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-[var(--primary)] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          JobPortal
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/jobs" className="hover:text-blue-200 transition">Jobs</Link>
          <Link to="/companies" className="hover:text-blue-200 transition">Companies</Link>
          <Link to="/services" className="hover:text-blue-200 transition">Services</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link 
            to="/login"
            className="px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link 
            to="/register"
            className="px-5 py-2 bg-white text-[var(--primary)] rounded font-medium hover:bg-gray-100 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}