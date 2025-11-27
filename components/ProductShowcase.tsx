import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LAPTOPS } from '../constants';
import Button from './ui/Button';
import { ShoppingCart, X, Check, Server, Cpu, HardDrive, Monitor } from 'lucide-react';
import { Laptop } from '../types';

const ProductShowcase: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Laptop | null>(null);

  return (
    <section id="products" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Arrivals</h2>
            <p className="text-slate-400">Hand-picked best sellers from this month.</p>
          </div>
          <Button variant="ghost" className="hidden md:flex">View All Inventory</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {LAPTOPS.map((laptop, index) => (
            <motion.div
              key={laptop.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProduct(laptop)}
              className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={laptop.image} 
                  alt={laptop.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {laptop.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs font-semibold bg-slate-900/80 backdrop-blur text-white rounded-md border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-5">
                <p className="text-sm text-emerald-400 font-medium mb-1">{laptop.brand}</p>
                <h3 className="text-lg font-bold text-white mb-2 truncate" title={laptop.name}>{laptop.name}</h3>
                
                <div className="space-y-1 mb-4 text-xs text-slate-400">
                  <div className="flex justify-between">
                    <span>CPU:</span> <span className="text-slate-200">{laptop.specs.cpu}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RAM:</span> <span className="text-slate-200">{laptop.specs.ram}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SSD:</span> <span className="text-slate-200">{laptop.specs.storage}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <span className="text-xl font-bold text-white">{laptop.price}</span>
                  <button className="p-2 rounded-full bg-slate-800 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline">View All Inventory</Button>
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-slate-900 border border-slate-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-slate-800/50 hover:bg-slate-700 text-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="md:w-1/2 relative bg-slate-950">
                 <img 
                   src={selectedProduct.image} 
                   alt={selectedProduct.name}
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Modal Content */}
              <div className="p-8 md:w-1/2 flex flex-col">
                <div className="mb-6">
                  <span className="text-emerald-400 font-bold tracking-wide text-sm uppercase">{selectedProduct.brand}</span>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProduct.name}</h2>
                  <p className="text-slate-400 leading-relaxed">
                    {selectedProduct.description || "Premium imported laptop directly from USA."}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-white font-semibold flex items-center gap-2">
                    <Server className="w-4 h-4 text-emerald-500" /> Specifications
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                      <div className="text-xs text-slate-500 mb-1 flex items-center gap-1"><Cpu className="w-3 h-3"/> Processor</div>
                      <div className="text-slate-200 font-medium text-sm">{selectedProduct.specs.cpu}</div>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                      <div className="text-xs text-slate-500 mb-1 flex items-center gap-1"><Server className="w-3 h-3"/> RAM</div>
                      <div className="text-slate-200 font-medium text-sm">{selectedProduct.specs.ram}</div>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                      <div className="text-xs text-slate-500 mb-1 flex items-center gap-1"><HardDrive className="w-3 h-3"/> Storage</div>
                      <div className="text-slate-200 font-medium text-sm">{selectedProduct.specs.storage}</div>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                      <div className="text-xs text-slate-500 mb-1 flex items-center gap-1"><Monitor className="w-3 h-3"/> Display</div>
                      <div className="text-slate-200 font-medium text-sm">{selectedProduct.specs.screen}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                     <div>
                       <span className="block text-xs text-slate-500">Total Price</span>
                       <span className="text-3xl font-bold text-white">{selectedProduct.price}</span>
                     </div>
                     <div className="flex gap-2">
                       {selectedProduct.tags.slice(0, 2).map(tag => (
                         <span key={tag} className="px-2 py-1 text-xs bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20">
                           {tag}
                         </span>
                       ))}
                     </div>
                  </div>
                  <Button className="w-full gap-2">
                    Add to Cart <Check className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductShowcase;