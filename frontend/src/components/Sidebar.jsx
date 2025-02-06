import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation

const Sidebar = () => {
  const location = useLocation(); // Get the current route location

  // Helper function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="hidden lg:flex flex-col w-64 bg-white border-r border-neutral-200/20 h-screen sticky top-0">
      <div className="p-4 border-b border-neutral-200/20">
        <div className="text-3xl font-bold text-red-600">Keyche</div>
      </div>
      <div className="flex-1 py-4">
        <Link
          to="/layout"
          className={`flex items-center px-4 py-2 ${
            isActive('/layout') ? 'text-neutral-900 bg-neutral-100' : 'text-neutral-600 hover:bg-neutral-100'
          } transition-colors`}
        >
          <span>Layout</span>
        </Link>
        <Link
          to="/"
          className={`flex items-center px-4 py-2 ${
            isActive('/') ? 'text-neutral-900 bg-neutral-100' : 'text-neutral-600 hover:bg-neutral-100'
          } transition-colors`}
        >
          <span>Connections</span>
        </Link>
        <Link
          to="/browser"
          className={`flex items-center px-4 py-2 ${
            isActive('/browser') ? 'text-neutral-900 bg-neutral-100' : 'text-neutral-600 hover:bg-neutral-100'
          } transition-colors`}
        >
          <span>Browser</span>
        </Link>
        <Link
          to="/workbench"
          className={`flex items-center px-4 py-2 ${
            isActive('/workbench') ? 'text-neutral-900 bg-neutral-100' : 'text-neutral-600 hover:bg-neutral-100'
          } transition-colors`}
        >
          <span>Workbench</span>
        </Link>
        <Link
          to="/slowlog"
          className={`flex items-center px-4 py-2 ${
            isActive('/slowlog') ? 'text-neutral-900 bg-neutral-100' : 'text-neutral-600 hover:bg-neutral-100'
          } transition-colors`}
        >
          <span>Slowlog</span>
        </Link>
        <Link
          to="/cli"
          className={`flex items-center px-4 py-2 ${
            isActive('/cli') ? 'text-neutral-900 bg-neutral-100' : 'text-neutral-600 hover:bg-neutral-100'
          } transition-colors`}
        >
          <span>CLI</span>
        </Link>
        <Link
          to="/profiler"
          className={`flex items-center px-4 py-2 ${
            isActive('/profiler') ? 'text-neutral-900 bg-neutral-100' : 'text-neutral-600 hover:bg-neutral-100'
          } transition-colors`}
        >
          <span>Profiler</span>
        </Link>
        <Link
          to="/configuration"
          className={`flex items-center px-4 py-2 ${
            isActive('/configuration') ? 'text-neutral-900 bg-neutral-100' : 'text-neutral-600 hover:bg-neutral-100'
          } transition-colors`}
        >
          <span>Configuration</span>
        </Link>
        <Link
          to="/analytics"
          className={`flex items-center px-4 py-2 ${
            isActive('/analytics') ? 'text-neutral-900 bg-neutral-100' : 'text-neutral-600 hover:bg-neutral-100'
          } transition-colors`}
        >
          <span>Analytics</span>
        </Link>
      </div>
      <div className="border-t border-neutral-200/20 p-4">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-neutral-200"></div>
          <div className="ml-2">
            <div className="text-sm font-medium">user@example.com</div>
            <button className="text-sm text-red-600">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;