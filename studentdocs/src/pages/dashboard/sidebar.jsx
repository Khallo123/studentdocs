import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUpload, FaUser, FaQuestionCircle } from 'react-icons/fa';

const Sidebar = () => (
  <aside className="w-64 bg-gray-800 text-white h-screen flex flex-col">
    <div className="p-4 text-lg font-bold border-b border-gray-700">Dashboard</div>
    <nav className="flex-1 p-4 space-y-2">
      <Link to="/" className="flex items-center p-2 rounded hover:bg-gray-700">
        <FaHome className="w-5 h-5 mr-2" /> Documents
      </Link>
      <Link to="/upload" className="flex items-center p-2 rounded hover:bg-gray-700">
        <FaUpload className="w-5 h-5 mr-2" /> Users
      </Link>
      <Link to="/signup" className="flex items-center p-2 rounded hover:bg-gray-700">
        <FaUser className="w-5 h-5 mr-2" /> Coursess
      </Link>
      <Link to="/support" className="flex items-center p-2 rounded hover:bg-gray-700">
        <FaQuestionCircle className="w-5 h-5 mr-2" /> Faculties
      </Link>
      <Link to="/support" className="flex items-center p-2 rounded hover:bg-gray-700">
        <FaQuestionCircle className="w-5 h-5 mr-2" /> Classes
      </Link>
    </nav>
    <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
      © 2025 University
    </div>
  </aside>
);

export default Sidebar;
