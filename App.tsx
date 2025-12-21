
import React from 'react';
// Fixing the missing exports by using the unified 'react-router' package which is standard in many modern environments.
import { HashRouter, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Forms from './pages/Forms';
import Statutes from './pages/Statutes';
import Legal from './pages/Legal';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/formulare" element={<Forms />} />
          <Route path="/statuten" element={<Statutes />} />
          <Route path="/impressum" element={<Legal />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
