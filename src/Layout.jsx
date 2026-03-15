import React from 'react';
import Header from './components/Header';
import SEOProvider from './components/SEOProvider';

export default function Layout({ children, currentPageName }) {
  return (
    <SEOProvider>
      <div className="min-h-screen bg-[#0a0a0a]">
        <Header currentPageName={currentPageName} />
        
        {/* Page Content */}
        <main>
          {children}
        </main>
      </div>
    </SEOProvider>
  );
}