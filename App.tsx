// App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans text-color selection:bg-emerald-500/30 selection:text-emerald-200">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <ProductShowcase />
        </main>
        <Footer />
        <AIConsultant />
      </div>
    </ThemeProvider>
  );
};

export default App;
