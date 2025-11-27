import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-emerald-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>#1 Trusted USA Laptop Importer</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Power Your Work With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                American Standards
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience the performance of premium Dell, HP, and Apple laptops imported directly from the USA. Unmatched quality, 12-month warranty, and prices that make sense.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#products">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Explore Models <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Talk to Sales
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-slate-500">
              <div>
                <p className="text-3xl font-bold text-white">5k+</p>
                <p className="text-sm">Happy Customers</p>
              </div>
              <div className="w-px h-10 bg-slate-800"></div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm">Genuine Parts</p>
              </div>
              <div className="w-px h-10 bg-slate-800"></div>
              <div>
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-sm">Support</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 animate-float">
               {/* 
                 Using a placeholder that looks techy. 
                 In a real app, this would be a high-res cutout of a laptop.
               */}
               <img 
                 src="https://picsum.photos/800/600" 
                 alt="Premium Laptop" 
                 className="rounded-2xl shadow-2xl shadow-emerald-500/20 border border-slate-700/50"
               />
               
               {/* Floating Badge */}
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 1 }}
                 className="absolute -bottom-6 -left-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl flex items-center gap-3"
               >
                 <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Star className="w-6 h-6 fill-current" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-400">Rating</p>
                   <p className="text-lg font-bold text-white">4.9/5.0</p>
                 </div>
               </motion.div>
            </div>
            
            {/* Decorative background circle behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;