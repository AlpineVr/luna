import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';

const queryClient = new QueryClient();

function AppContent() {
  const location = useLocation();
  
  // Map routes to page names for the Layout
  const getPageName = () => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    if (path.startsWith('/projects')) return 'Projects';
    if (path.startsWith('/services')) return 'Services';
    if (path.startsWith('/about')) return 'About';
    if (path.startsWith('/contact')) return 'Contact';
    return 'Home';
  };

  return (
    <Layout currentPageName={getPageName()}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projectdetail" element={<ProjectDetail />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppContent />
      </Router>
    </QueryClientProvider>
  );
}