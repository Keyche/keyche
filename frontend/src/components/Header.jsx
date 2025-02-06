import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-neutral-200/20 sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-neutral-900">Keyche</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-64 px-4 py-2 rounded-lg border border-neutral-200/20 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button className="p-2 text-neutral-600 hover:text-neutral-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-neutral-200"></button>
        </div>
      </div>
    </header>
  );
};

export default Header;