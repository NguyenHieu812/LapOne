import React from 'react';

export interface Laptop {
  id: number;
  name: string;
  brand: string;
  price: string;
  image: string;
  description?: string;
  specs: {
    cpu: string;
    ram: string;
    storage: string;
    screen: string;
  };
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}