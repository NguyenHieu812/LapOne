import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

const apiKey = (import.meta as any).env?.VITE_API_KEY || '';
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

// Simple keyword matching for demo purposes when no API key is present
const simulateResponse = async (message: string): Promise<string> => {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Độ trễ giả lập

  const lowerMsg = message.toLowerCase();

  if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('how much') || lowerMsg.includes('giá') || lowerMsg.includes('bao nhiêu')) {
    return "Các mẫu laptop của chúng tôi có mức giá dao động từ khoảng **$900** cho các mẫu văn phòng hiệu suất cao đến hơn **$3,500** cho các máy trạm (workstation) cao cấp. Ví dụ, dòng Dell XPS 15 bắt đầu từ khoảng 1,899$.";
  }

  if (lowerMsg.includes('dell') || lowerMsg.includes('xps')) {
    return "Dòng Dell XPS là lựa chọn hàng đầu cho dân sáng tạo. Chúng tôi có sẵn mẫu XPS 15 9530 với màn hình OLED tuyệt đẹp và bộ xử lý Core i9 mới nhất.";
  }

  if (lowerMsg.includes('mac') || lowerMsg.includes('apple') || lowerMsg.includes('macbook')) {
    return "Chúng tôi chuyên về các mẫu MacBook Pro M3 nhập khẩu từ Mỹ. Dòng này mang lại thời lượng pin và hiệu năng đáng kinh ngạc cho dân chuyên nghiệp sáng tạo. MacBook Pro 14 inch M3 Max thực sự là một con quái vật về hiệu suất!";
  }

  if (lowerMsg.includes('thinkpad') || lowerMsg.includes('lenovo') || lowerMsg.includes('văn phòng')) {
    return "ThinkPad X1 Carbon là tiêu chuẩn vàng cho giới doanh nhân. Máy siêu nhẹ, bàn phím huyền thoại, và độ bền chuẩn quân đội. Hoàn hảo cho lập trình viên và công việc văn phòng.";
  }

  if (lowerMsg.includes('gaming') || lowerMsg.includes('razer') || lowerMsg.includes('chơi game')) {
    return "Đối với nhu cầu chơi game, tôi đặc biệt khuyên dùng Razer Blade 16. Máy có màn hình QHD+ 240Hz và hệ thống tản nhiệt mạnh mẽ, lý tưởng cho các tựa game AAA.";
  }

  if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('chào')) {
    return "Xin chào! Tôi là **LapOne Genius**. Tôi có thể giúp bạn tìm chiếc laptop nhập khẩu từ Mỹ hoàn hảo. Bạn đang tìm kiếm máy để lập trình (coding), thiết kế đồ họa (design), hay chơi game?";
  }

  return "Tôi khuyên bạn nên xem qua mục 'Tính năng' của chúng tôi để biết tại sao hàng nhập khẩu Mỹ có chất lượng cao hơn. Bạn có thể cho tôi biết thêm về mục đích sử dụng chiếc laptop này của bạn không? (Lưu ý: Đây là chế độ phản hồi demo)";
};

export const generateAIResponse = async (userMessage: string): Promise<string> => {
  // Chuyển sang chế độ giả lập nếu không có API key
  if (!apiKey || !ai) {
    console.warn("Không tìm thấy API Key. Đang sử dụng chế độ Mock AI cho demo.");
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

    return response.text || "Hiện tại tôi đang gặp khó khăn trong việc đưa ra lời khuyên. Xin lỗi vì sự bất tiện này!";
  } catch (error) {
    console.error("Lỗi API Gemini:", error);
    // Nếu gọi API thất bại (ví dụ: hết quota), chuyển về chế độ giả lập
    return simulateResponse(userMessage);
  }
};