import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="py-24 relative"
      // Cập nhật: Thay thế bg-slate-900 bằng biến CSS
      style={{ backgroundColor: 'var(--bg-component-darker)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // Cập nhật: text-white -> text-base
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--text-base)' }}
          >
            Why Choose LapOne?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            // Cập nhật: text-slate-400 -> text-secondary
            className="max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            We don't just sell laptops; we deliver a premium standard of technology imported straight from the US to your desk. Unmatched quality, 12-month warranty, and prices that make sense.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              // Cập nhật: bg-slate-800/50 và border-slate-700
              className="p-6 rounded-2xl transition-colors group"
              style={{
                backgroundColor: 'var(--bg-component)', // Nền card
                border: '1px solid var(--border-color)' // Viền card
              }}
            >
              <div
                // Cập nhật: bg-slate-900 và hover:bg-slate-800
                className="mb-4 p-3 rounded-lg inline-block transition-colors"
                style={{
                  backgroundColor: 'var(--bg-component-darker)', // Nền Icon Badge
                }}
                // Tailwind hover logic vẫn hoạt động tốt, nhưng chúng ta cần đặt style để nền chuyển đổi
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-component)')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-component-darker)')}
              >
                {feature.icon}
              </div>
              <h3
                // Cập nhật: text-white -> text-base
                className="text-xl font-semibold mb-2"
                style={{ color: 'var(--text-base)' }}
              >
                {feature.title}
              </h3>
              <p
                // Cập nhật: text-slate-400 -> text-secondary
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
