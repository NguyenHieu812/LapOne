import React from 'react';
import { Laptop, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-950 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Laptop className="w-6 h-6 text-emerald-500" />
              <span className="text-xl font-bold text-white">LapOne</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Your trusted partner for high-performance imported laptops. Bringing American quality to your doorstep since 2018.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Dell XPS Series</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">MacBook Pro</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">ThinkPad X1</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Gaming Laptops</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Warranty Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Shipping Guide</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact & Map */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400 mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>123 Tech Street, District 1, Ho Chi Minh City, Vietnam</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>+84 90 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>sales@lapone.vn</span>
              </li>
            </ul>
            
            {/* Google Map Embed */}
            <div className="w-full h-40 rounded-xl overflow-hidden border border-slate-800 shadow-lg shadow-emerald-900/10">
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

        <div className="border-t border-slate-900 pt-8 text-center text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} LapOne. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;