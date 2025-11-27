import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section
      // Bỏ bg-slate-950 ở đây vì nó đã được quản lý bởi ThemeProvider ở App.tsx
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      {/* Background Elements - Giữ nguyên các màu nhấn (accent colors) */}
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
            <div
              // Cập nhật: bg-slate-800/50 -> [background] và border-slate-700 -> [border]
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor: 'var(--bg-component-darker)', // Sử dụng màu nền component
                border: '1px solid var(--border-color)'
              }}
            >
              <Star className="w-4 h-4 fill-current text-emerald-400" />
              <span className="text-emerald-400">#1 Trusted USA Laptop Importer</span>
            </div>

            <h1
              // Cập nhật: text-white -> text-base (đã được bọc ở App.tsx)
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ color: 'var(--text-base)' }}
            >
              Power Your Work With <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-500">
                American Standards
              </span>
            </h1>

            <p
              // Cập nhật: text-slate-400 -> text-secondary
              className="text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Experience the performance of premium Dell, HP, and Apple laptops imported directly from the USA. Unmatched quality, 12-month warranty, and prices that make sense.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#products">
                <Button variant="primary" size="lg" className="w-full sm:w-auto cursor-pointer">
                  Explore Models <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="https://zalo.me/0823456232" target="_blank" rel="noopener noreferrer" >
                <Button variant="outline" size="lg" className="w-full sm:w-auto cursor-pointer">
                  Talk to Sales
                </Button>
              </a>
            </div>

            <div
              // Cập nhật: text-slate-500 -> text-secondary
              className="mt-10 flex items-center justify-center lg:justify-start gap-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              <div>
                {/* Cập nhật: text-white -> text-base */}
                <p className="text-3xl font-bold" style={{ color: 'var(--text-base)' }}>5k+</p>
                <p className="text-sm">Happy Customers</p>
              </div>
              {/* Cập nhật: bg-slate-800 -> bg-border-color */}
              <div className="w-px h-10" style={{ backgroundColor: 'var(--border-color)' }}></div>
              <div>
                {/* Cập nhật: text-white -> text-base */}
                <p className="text-3xl font-bold" style={{ color: 'var(--text-base)' }}>100%</p>
                <p className="text-sm">Genuine Parts</p>
              </div>
              {/* Cập nhật: bg-slate-800 -> bg-border-color */}
              <div className="w-px h-10" style={{ backgroundColor: 'var(--border-color)' }}></div>
              <div>
                {/* Cập nhật: text-white -> text-base */}
                <p className="text-3xl font-bold" style={{ color: 'var(--text-base)' }}>24/7</p>
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
              <img
                src="https://picsum.photos/800/600"
                alt="Premium Laptop"
                // Cập nhật: border-slate-700/50 -> border-border-color/50
                className="rounded-2xl shadow-2xl shadow-emerald-500/20"
                style={{ border: '1px solid var(--border-color)' }}
              />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                // Cập nhật: bg-slate-800 -> bg-component và border-slate-700 -> border-border-color
                className="absolute -bottom-6 -left-6 p-4 rounded-xl shadow-xl flex items-center gap-3"
                style={{
                  backgroundColor: 'var(--bg-component)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  {/* Cập nhật: text-slate-400 -> text-secondary */}
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Rating</p>
                  {/* Cập nhật: text-white -> text-base */}
                  <p className="text-lg font-bold" style={{ color: 'var(--text-base)' }}>4.9/5.0</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative background circle behind image (Giữ nguyên màu nhấn) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-tr from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
