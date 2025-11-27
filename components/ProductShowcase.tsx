// ProductShowcase.tsx (Đã được chỉnh sửa)
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LAPTOPS } from '../constants';
import Button from './ui/Button';
import { ShoppingCart, X, Check, Server, Cpu, HardDrive, Monitor, ChevronLeft, ChevronRight } from 'lucide-react';
import { Laptop } from '../types';
import { useTheme } from '../context/ThemeContext'; // Import useTheme (đảm bảo file context đã được tạo)

// Hằng số phân trang
const ITEMS_PER_PAGE = 4;

const ProductShowcase: React.FC = () => {
  const { theme } = useTheme(); // Lấy theme để điều chỉnh màu sắc
  const [selectedProduct, setSelectedProduct] = useState<Laptop | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Tính toán tổng số trang
  const totalPages = Math.ceil(LAPTOPS.length / ITEMS_PER_PAGE);

  // 2. Tính toán sản phẩm cho trang hiện tại
  const currentLaptops = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return LAPTOPS.slice(startIndex, endIndex);
  }, [currentPage]);

  // 3. Xử lý chuyển trang
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Tạo mảng số trang để render [1, 2, 3, ...]
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Component Pagination
  const Pagination = () => (
    <div className="flex justify-center items-center mt-12 space-x-2">

      {/* Nút Previous */}
      <Button
        variant="ghost"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        // Cập nhật: text-slate-400, hover:text-white
        className="px-3 py-2 text-sm disabled:opacity-50"
        style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}
      >
        <ChevronLeft className="w-4 h-4 mr-1" /> Previous
      </Button>

      {/* Các nút số trang */}
      {pageNumbers.map(page => (
        <Button
          key={page}
          variant={page === currentPage ? "primary" : "ghost"}
          onClick={() => handlePageChange(page)}
          // Cập nhật: text-slate-400, hover:bg-slate-800
          className={`px-4 py-2 text-sm rounded-lg ${page === currentPage
            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
            : ''
            }`}
          style={page !== currentPage ? { color: 'var(--text-secondary)', backgroundColor: theme === 'dark' ? 'transparent' : 'var(--bg-component)' } : {}}
        >
          {page}
        </Button>
      ))}

      {/* Nút Next */}
      <Button
        variant="ghost"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        // Cập nhật: text-slate-400, hover:text-white
        className="px-3 py-2 text-sm disabled:opacity-50"
        style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}
      >
        Next <ChevronRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  );


  return (
    <section
      id="products"
      className="py-24"
      // Cập nhật: bg-slate-950 -> var(--bg-primary)
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2
              // Cập nhật: text-white -> text-base
              className="text-3xl font-bold mb-1"
              style={{ color: 'var(--text-base)' }}
            >
              Featured Arrivals
            </h2>
            <p
              // Cập nhật: text-slate-400 -> text-secondary
              className="text-sm"
              style={{ color: 'var(--text-secondary)' }}
            >
              Hand-picked best sellers.
            </p>
          </div>
          <Button variant="outline" className="text-sm px-3 py-1">View All</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            {currentLaptops.map((laptop, index) => (
              <motion.div
                key={laptop.id}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedProduct(laptop)}
                // Cập nhật: bg-slate-900 và border-slate-800
                className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10"
                style={{
                  backgroundColor: 'var(--bg-component-darker)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={laptop.image}
                    alt={laptop.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {laptop.tags.map(tag => (
                      <span
                        key={tag}
                        // Cập nhật: bg-slate-900/80 và border-slate-700
                        className="px-2 py-1 text-xs font-semibold backdrop-blur text-white rounded-md"
                        style={{
                          backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                          border: '1px solid var(--border-color)',
                          color: theme === 'dark' ? 'white' : 'var(--text-base)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm text-emerald-400 font-medium mb-1">{laptop.brand}</p>
                  <h3
                    // Cập nhật: text-white -> text-base
                    className="text-lg font-bold mb-2 truncate"
                    title={laptop.name}
                    style={{ color: 'var(--text-base)' }}
                  >
                    {laptop.name}
                  </h3>

                  <div
                    // Cập nhật: text-slate-400 -> text-secondary
                    className="space-y-1 mb-4 text-xs"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <div className="flex justify-between">
                      <span>CPU:</span> <span style={{ color: 'var(--text-base)', opacity: 0.8 }}>{laptop.specs.cpu}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>RAM:</span> <span style={{ color: 'var(--text-base)', opacity: 0.8 }}>{laptop.specs.ram}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SSD:</span> <span style={{ color: 'var(--text-base)', opacity: 0.8 }}>{laptop.specs.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Screen:</span> <span style={{ color: 'var(--text-base)', opacity: 0.8 }}>{laptop.specs.screen}</span>
                    </div>
                  </div>

                  <div
                    // Cập nhật: border-slate-800
                    className="flex items-center justify-between pt-4"
                    style={{ borderTop: '1px solid var(--border-color)' }}
                  >
                    <span
                      // Cập nhật: text-white -> text-base
                      className="text-xl font-bold"
                      style={{ color: 'var(--text-base)' }}
                    >
                      {laptop.price}
                    </span>
                    <button
                      // Cập nhật: bg-slate-800 và hover:text-white
                      className="p-2 rounded-full text-emerald-400 hover:bg-emerald-500 transition-colors"
                      style={{ backgroundColor: 'var(--bg-component)' }}
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {totalPages > 1 && <Pagination />}

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline">View All Inventory</Button>
        </div>
      </div>

      {/* Product Detail Modal (Tiếp tục cập nhật) */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
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
              // Cập nhật: bg-slate-900 và border-slate-700
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
              style={{
                backgroundColor: 'var(--bg-component-darker)',
                border: '1px solid var(--border-color)'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                // Cập nhật: bg-slate-800/50 và text-white
                className="absolute top-4 right-4 z-10 p-2 hover:bg-slate-700 rounded-full transition-colors"
                style={{
                  backgroundColor: 'var(--bg-component)/50',
                  color: 'var(--text-base)'
                }}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div
                // Cập nhật: bg-slate-950
                className="md:w-1/2 relative"
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay (Giữ nguyên màu nền để tạo độ mờ ở rìa) */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: theme === 'dark'
                      ? 'linear-gradient(to top, var(--bg-component-darker), transparent, transparent)'
                      : 'linear-gradient(to top, var(--bg-component-darker), transparent, transparent)'
                  }}
                />
              </div>

              {/* Modal Content */}
              <div className="p-8 md:w-1/2 flex flex-col">
                <div className="mb-6">
                  <span className="text-emerald-400 font-bold tracking-wide text-sm uppercase">{selectedProduct.brand}</span>
                  <h2
                    // Cập nhật: text-white -> text-base
                    className="text-3xl font-bold mb-2"
                    style={{ color: 'var(--text-base)' }}
                  >
                    {selectedProduct.name}
                  </h2>
                  <p
                    // Cập nhật: text-slate-400 -> text-secondary
                    className="leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {selectedProduct.description || "Premium imported laptop directly from USA."}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h3
                    // Cập nhật: text-white -> text-base
                    className="font-semibold flex items-center gap-2"
                    style={{ color: 'var(--text-base)' }}
                  >
                    <Server className="w-4 h-4 text-emerald-500" /> Specifications
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {/* Specifications Card */}
                    {[
                      { icon: <Cpu className="w-3 h-3" />, label: 'Processor', value: selectedProduct.specs.cpu },
                      { icon: <Server className="w-3 h-3" />, label: 'RAM', value: selectedProduct.specs.ram },
                      { icon: <HardDrive className="w-3 h-3" />, label: 'Storage', value: selectedProduct.specs.storage },
                      { icon: <Monitor className="w-3 h-3" />, label: 'Display', value: selectedProduct.specs.screen },
                    ].map((spec, i) => (
                      <div
                        key={i}
                        // Cập nhật: bg-slate-800/50 và border-slate-700/50
                        className="p-3 rounded-lg"
                        style={{
                          backgroundColor: 'var(--bg-component)/50',
                          border: '1px solid var(--border-color)/50'
                        }}
                      >
                        {/* Cập nhật: text-slate-500 */}
                        <div className="text-xs mb-1 flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>{spec.icon} {spec.label}</div>
                        {/* Cập nhật: text-slate-200 */}
                        <div className="font-medium text-sm" style={{ color: 'var(--text-base)', opacity: 0.9 }}>{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  // Cập nhật: border-slate-800
                  className="mt-auto pt-6"
                  style={{ borderTop: '1px solid var(--border-color)' }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {/* Cập nhật: text-slate-500 */}
                      <span className="block text-xs" style={{ color: 'var(--text-secondary)' }}>Total Price</span>
                      {/* Cập nhật: text-white -> text-base */}
                      <span className="text-3xl font-bold" style={{ color: 'var(--text-base)' }}>{selectedProduct.price}</span>
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
