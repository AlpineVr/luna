import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
// Add page imports here
import Home from "./pages/Home";
import Rides from "./pages/Rides";

const queryClient = new QueryClient();

document.title = "LunaPalooza by Darcy Thripp";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Rides" element={<Rides />} />
    </Routes>
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