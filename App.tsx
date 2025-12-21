
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Forms from './pages/Forms';
import Statutes from './pages/Statutes';
import Legal from './pages/Legal';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/formulare" element={<Forms />} />
          <Route path="/statuten" element={<Statutes />} />
          <Route path="/impressum" element={<Legal />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
