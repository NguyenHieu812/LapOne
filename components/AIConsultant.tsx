import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Bot, Sparkles, Zap } from 'lucide-react';
import { generateAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

// Thông tin Zalo của bạn
const ZALO_NUMBER = '0823456232';
const ZALO_LINK = `https://zalo.me/${ZALO_NUMBER}`;
const ZALO_ICON_URL = "https://img.icons8.com/color/48/zalo.png";

// Các câu hỏi gợi ý
const QUICK_PROMPTS = [
  'Laptop nào phù hợp cho lập trình viên?',
  'MacBook Pro có sẵn những mẫu nào?',
  'Laptop gaming giá rẻ nhất là bao nhiêu?',
  'Sự khác biệt giữa hàng nhập Mỹ và hàng trong nước?',
];

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Xin chào! Tôi là LapOne Genius. Bạn cần tìm laptop để làm gì? (VD: "Laptop cho thiết kế đồ họa tầm 30 triệu"), tôi sẽ giúp bạn chọn!', timestamp: new Date() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const currentInput = input.trim();
    const userMsg: ChatMessage = { role: 'user', text: currentInput, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateAIResponse(currentInput);

    const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleQuickPromptClick = useCallback(async (prompt: string) => {
    if (isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: prompt, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    const responseText = await generateAIResponse(prompt);
    const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);

  }, [isLoading]);

  return (
    <>
      <motion.a
        href={ZALO_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-20 right-4 z-50 p-3 rounded-full shadow-lg flex items-center justify-center ${isOpen ? 'hidden' : 'flex'}`}
        style={{ padding: '4px' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={ZALO_ICON_URL} alt="Chat Zalo" className="w-16 h-16" />
      </motion.a>
      {/* Nút Chat AI (Vị trí: bottom-20, right-6) */}
      <motion.button
        onClick={() => setIsOpen(true)}
        // Đã thay đổi vị trí để xếp dọc
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-linear-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-teal-500/30 flex items-center justify-center ${isOpen ? 'hidden' : 'flex'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Sparkles className="w-6 h-6 animate-pulse" />
      </motion.button>



      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[90vw] sm:w-[400px] h-[500px] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-linear-to-tr from-emerald-500 to-teal-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">LapOne Genius</h3>
                  <p className="text-xs text-emerald-400">AI Consultant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
              {/* Quick Prompts */}
              {messages.length === 1 && messages[0].role === 'model' && (
                <div className="py-2">
                  <p className="text-xs font-semibold text-slate-400 mb-2 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-yellow-400" /> Câu hỏi gợi ý nhanh:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {QUICK_PROMPTS.map((prompt, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleQuickPromptClick(prompt)}
                        disabled={isLoading}
                        className="px-3 py-1 text-xs text-emerald-300 border border-emerald-700 bg-emerald-900/40 rounded-full hover:bg-emerald-900/60 transition-colors disabled:opacity-50"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {prompt}
                      </motion.button>
                    ))}
                  </div>
                  <hr className="border-slate-700 mt-4" />
                </div>
              )}
              {/* Kết thúc Quick Prompts */}


              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed ${msg.role === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-none'
                      : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 rounded-2xl p-3 rounded-bl-none flex gap-1 items-center">
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-slate-800 border-t border-slate-700">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Hỏi tư vấn..."
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 placeholder-slate-500"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-2 p-1.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 disabled:opacity-50 disabled:hover:bg-emerald-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIConsultant;