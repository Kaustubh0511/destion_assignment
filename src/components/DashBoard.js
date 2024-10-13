import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <nav className="p-6">
          <ul>
            <li className="mb-2">
              <Link to="/dashboard" className="text-blue-500">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/profile" className="text-blue-500">Profile</Link>
            </li>
            <li className="mb-2">
              <Link to="/settings" className="text-blue-500">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-10">
        <header className="mb-6">
          <h2 className="text-2xl font-semibold">Welcome to your Dashboard</h2>
        </header>
        <main>
          <p>This is the main content area where dynamic content will appear.</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
