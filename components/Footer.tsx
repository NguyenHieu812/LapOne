import React from 'react';
import { Laptop, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="pt-16 pb-8"
      // Cập nhật: bg-slate-950 -> var(--bg-primary) và border-slate-900 -> var(--bg-component-darker)
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--bg-component-darker)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Laptop className="w-6 h-6 text-emerald-500" />
              <span
                // Cập nhật: text-white -> text-base
                className="text-xl font-bold"
                style={{ color: 'var(--text-base)' }}
              >
                LapOne
              </span>
            </div>
            <p
              // Cập nhật: text-slate-400 -> text-secondary
              className="text-sm mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              Your trusted partner for high-performance imported laptops. Bringing American quality to your doorstep since 2018.
            </p>
            <div className="flex gap-4">
              {/* Cập nhật: text-slate-400 -> text-secondary */}
              <a href="#" className="hover:text-emerald-400 transition-colors" style={{ color: 'var(--text-secondary)' }}><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors" style={{ color: 'var(--text-secondary)' }}><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors" style={{ color: 'var(--text-secondary)' }}><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            {/* Cập nhật: text-white -> text-base */}
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-base)' }}>Shop</h4>
            {/* Cập nhật: text-slate-400 -> text-secondary */}
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Dell XPS Series</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">MacBook Pro</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">ThinkPad X1</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Gaming Laptops</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            {/* Cập nhật: text-white -> text-base */}
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-base)' }}>Support</h4>
            {/* Cập nhật: text-slate-400 -> text-secondary */}
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Warranty Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Shipping Guide</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact & Map */}
          <div>
            {/* Cập nhật: text-white -> text-base */}
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-base)' }}>Contact</h4>
            {/* Cập nhật: text-slate-400 -> text-secondary */}
            <ul className="space-y-3 text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>123 Tech Street, District 1, Ho Chi Minh City, Vietnam</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>+84 823 456 232</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>sales@lapone.vn</span>
              </li>
            </ul>

            {/* Google Map Embed */}
            <div
              // Cập nhật: border-slate-800 -> border-border-color
              className="w-full h-40 rounded-xl overflow-hidden shadow-lg shadow-emerald-900/10"
              style={{ border: '1px solid var(--border-color)' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424168625915!2d106.69618037480469!3d10.779288289374052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f36c4e1c7f3%3A0xe6f7c679e9515569!2sNotre%20Dame%20Cathedral%20of%20Saigon!5e0!3m2!1sen!2s!4v1709123456789!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LapOne Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          // Cập nhật: border-slate-900 và text-slate-600
          className="pt-8 text-center text-sm"
          style={{
            borderTop: '1px solid var(--bg-component-darker)',
            color: 'var(--border-color)' // Sử dụng màu viền cho văn bản mờ
          }}
        >
          <p>© {new Date().getFullYear()} LapOne. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
