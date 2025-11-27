import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

const apiKey = (import.meta as any).env?.VITE_API_KEY || '';
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

// Simple keyword matching for demo purposes when no API key is present
const simulateResponse = async (message: string): Promise<string> => {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Fake latency

  const lowerMsg = message.toLowerCase();

  if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('how much')) {
    return "Our laptops range from roughly $900 for efficient business models to $3,500+ for high-end workstations. For example, the Dell XPS 15 starts around $1,899.";
  }

  if (lowerMsg.includes('dell') || lowerMsg.includes('xps')) {
    return "The Dell XPS series is a top choice for creators. We have the XPS 15 9530 in stock with a stunning OLED display and Core i9 processor.";
  }

  if (lowerMsg.includes('mac') || lowerMsg.includes('apple')) {
    return "We specialize in imported MacBook Pro M3 models. They offer incredible battery life and performance for creative professionals. The 14-inch M3 Max is a beast!";
  }

  if (lowerMsg.includes('thinkpad') || lowerMsg.includes('lenovo')) {
    return "ThinkPad X1 Carbon is the gold standard for business. Ultra-lightweight, legendary keyboard, and military-grade durability. Perfect for coding and office work.";
  }

  if (lowerMsg.includes('gaming') || lowerMsg.includes('razer')) {
    return "For gaming, I highly recommend the Razer Blade 16. It features a 240Hz QHD+ screen and powerful cooling, making it perfect for AAA titles.";
  }

  if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
    return "Hello! I'm LapOne Genius. I can help you find the perfect USA-imported laptop. Are you looking for something for coding, design, or gaming?";
  }

  return "I'd recommend looking at our 'Features' section to see why USA imports are higher quality. Could you tell me more about what you'll use the laptop for? (Note: This is a demo response mode)";
};

export const generateAIResponse = async (userMessage: string): Promise<string> => {
  // Fallback to mock mode if no API key is provided
  if (!apiKey || !ai) {
    console.warn("No API Key found. Using Mock AI mode for demo.");
    return simulateResponse(userMessage);
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm having trouble thinking of a recommendation right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    // If the API call fails (e.g., quota exceeded), fall back to mock
    return simulateResponse(userMessage);
  }
};