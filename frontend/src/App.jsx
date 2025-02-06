import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Connections from './components/Connections';
import Workbench from './components/Workbench';
import Browser from './components/Browser';
import SlowLog from './components/SlowLog';
import CLI from './components/CLI';
import Profiler from './components/Profiler';
import Configuration from './components/Configuration';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="bg-[#E5E7EB] min-h-screen">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Connections />} />
              <Route path="/browser" element={<Browser />} />
              <Route path="/workbench" element={<Workbench />} />
              <Route path="/slowlog" element={<SlowLog />} />
              <Route path="/cli" element={<CLI />} />
              <Route path="/profiler" element={<Profiler />} />
              <Route path="/configuration" element={<Configuration />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;