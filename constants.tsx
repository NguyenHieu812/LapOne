import React from 'react';
import { Laptop } from './types';
import { ShieldCheck, Truck, Cpu, Award } from 'lucide-react';

export const LAPTOPS: Laptop[] = [
  {
    id: 1,
    name: "Dell XPS 15 9530",
    brand: "Dell",
    price: "$1,899",
    image: "https://picsum.photos/600/400?random=1",
    description: "The Dell XPS 15 balances power and portability with a stunning OLED display and premium build quality. Perfect for content creators and professionals who demand color accuracy and performance.",
    specs: {
      cpu: "Core i9-13900H",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      screen: "15.6\" OLED 3.5K"
    },
    tags: ["Best Seller", "Creator"]
  },
  {
    id: 2,
    name: "MacBook Pro 14 M3 Max",
    brand: "Apple",
    price: "$3,199",
    image: "https://picsum.photos/600/400?random=2",
    description: "With the M3 Max chip, this MacBook Pro delivers game-changing performance and battery life. Its Liquid Retina XDR display is arguably the best in a laptop, housed in a durable aluminum unibody.",
    specs: {
      cpu: "M3 Max (14-core)",
      ram: "36GB Unified",
      storage: "1TB SSD",
      screen: "14.2\" Liquid Retina XDR"
    },
    tags: ["Premium", "Performance"]
  },
  {
    id: 3,
    name: "ThinkPad X1 Carbon Gen 11",
    brand: "Lenovo",
    price: "$1,499",
    image: "https://picsum.photos/600/400?random=3",
    description: "The gold standard for business laptops. Ultralight, durable, and featuring the legendary ThinkPad keyboard. It includes robust security features and is tested against military-grade requirements.",
    specs: {
      cpu: "Core i7-1365U",
      ram: "16GB LPDDR5",
      storage: "512GB SSD",
      screen: "14\" WUXGA IPS"
    },
    tags: ["Business", "Lightweight"]
  },
  {
    id: 4,
    name: "Razer Blade 16",
    brand: "Razer",
    price: "$2,699",
    image: "https://picsum.photos/600/400?random=4",
    description: "Desktop-grade gaming performance in a portable form factor. The Razer Blade 16 features a dual-mode mini-LED display and the latest NVIDIA graphics for high-fidelity gaming on the go.",
    specs: {
      cpu: "Core i9-13950HX",
      ram: "32GB DDR5",
      storage: "1TB SSD",
      screen: "16\" QHD+ 240Hz"
    },
    tags: ["Gaming", "RGB"]
  },
  {
    id: 5,
    name: "Razer Blade 16",
    brand: "Razer",
    price: "$2,699",
    image: "https://picsum.photos/600/400?random=4",
    description: "Desktop-grade gaming performance in a portable form factor. The Razer Blade 16 features a dual-mode mini-LED display and the latest NVIDIA graphics for high-fidelity gaming on the go.",
    specs: {
      cpu: "Core i9-13950HX",
      ram: "32GB DDR5",
      storage: "1TB SSD",
      screen: "16\" QHD+ 240Hz"
    },
    tags: ["Gaming", "RGB"]
  },
  {
    id: 6,
    name: "Razer Blade 16",
    brand: "Razer",
    price: "$2,699",
    image: "https://picsum.photos/600/400?random=4",
    description: "Desktop-grade gaming performance in a portable form factor. The Razer Blade 16 features a dual-mode mini-LED display and the latest NVIDIA graphics for high-fidelity gaming on the go.",
    specs: {
      cpu: "Core i9-13950HX",
      ram: "32GB DDR5",
      storage: "1TB SSD",
      screen: "16\" QHD+ 240Hz"
    },
    tags: ["Gaming", "RGB"]
  },
  {
    id: 7,
    name: "Razer Blade 16",
    brand: "Razer",
    price: "$2,699",
    image: "https://picsum.photos/600/400?random=4",
    description: "Desktop-grade gaming performance in a portable form factor. The Razer Blade 16 features a dual-mode mini-LED display and the latest NVIDIA graphics for high-fidelity gaming on the go.",
    specs: {
      cpu: "Core i9-13950HX",
      ram: "32GB DDR5",
      storage: "1TB SSD",
      screen: "16\" QHD+ 240Hz"
    },
    tags: ["Gaming", "RGB"]
  },
  {
    id: 8,
    name: "Razer Blade 16",
    brand: "Razer",
    price: "$2,699",
    image: "https://picsum.photos/600/400?random=4",
    description: "Desktop-grade gaming performance in a portable form factor. The Razer Blade 16 features a dual-mode mini-LED display and the latest NVIDIA graphics for high-fidelity gaming on the go.",
    specs: {
      cpu: "Core i9-13950HX",
      ram: "32GB DDR5",
      storage: "1TB SSD",
      screen: "16\" QHD+ 240Hz"
    },
    tags: ["Gaming", "RGB"]
  },
  {
    id: 9,
    name: "Razer Blade 16",
    brand: "Razer",
    price: "$2,699",
    image: "https://picsum.photos/600/400?random=4",
    description: "Desktop-grade gaming performance in a portable form factor. The Razer Blade 16 features a dual-mode mini-LED display and the latest NVIDIA graphics for high-fidelity gaming on the go.",
    specs: {
      cpu: "Core i9-13950HX",
      ram: "32GB DDR5",
      storage: "1TB SSD",
      screen: "16\" QHD+ 240Hz"
    },
    tags: ["Gaming", "RGB"]
  },
  {
    id: 10,
    name: "Razer Blade 16",
    brand: "Razer",
    price: "$2,699",
    image: "https://picsum.photos/600/400?random=4",
    description: "Desktop-grade gaming performance in a portable form factor. The Razer Blade 16 features a dual-mode mini-LED display and the latest NVIDIA graphics for high-fidelity gaming on the go.",
    specs: {
      cpu: "Core i9-13950HX",
      ram: "32GB DDR5",
      storage: "1TB SSD",
      screen: "16\" QHD+ 240Hz"
    },
    tags: ["Gaming", "RGB"]
  }
];

export const FEATURES = [
  {
    title: "100% USA Import",
    description: "Authentic products imported directly from the US market with original receipts.",
    icon: <Truck className="w-8 h-8 text-emerald-400" />
  },
  {
    title: "12-Month Warranty",
    description: "Comprehensive hardware warranty and lifetime software support for peace of mind.",
    icon: <ShieldCheck className="w-8 h-8 text-teal-400" />
  },
  {
    title: "Expert Selection",
    description: "Hand-picked configurations optimized for programming, design, and gaming.",
    icon: <Cpu className="w-8 h-8 text-green-400" />
  },
  {
    title: "Premium Quality",
    description: "Grade A+ condition guarantees. Pristine aesthetics and perfect functionality.",
    icon: <Award className="w-8 h-8 text-lime-400" />
  }
];

export const AI_SYSTEM_INSTRUCTION = `You are "LapOne Genius", an AI sales consultant for LapOne, a premium store selling USA imported laptops. 
Your goal is to help customers find the best laptop for their needs from our catalog (Dell XPS, MacBook Pro, ThinkPad X1, Razer Blade).
Keep answers concise, professional, and friendly. 
If asked about prices, give ranges based on typical US import market rates (e.g., $800 - $3000).
Highlight key benefits: USA standard durability, 12-month warranty, and competitive pricing.
Do not invent specific inventory numbers. Focus on specs and suitability for tasks (coding, gaming, office).`;