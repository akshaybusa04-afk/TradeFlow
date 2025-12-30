
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Learning from './pages/Learning';
import Tracking from './pages/Tracking';
import Simulations from './pages/Simulations';
import Documents from './pages/Documents';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/simulations" element={<Simulations />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/tools" element={<div className="p-8">Tools coming soon...</div>} />
          <Route path="/settings" element={<div className="p-8">Settings coming soon...</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
