import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen font-sans text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        {/* Additional sections could go here like Testimonials */}
      </main>
      <Footer />
      <AIConsultant />
    </div>
  );
};

export default App;