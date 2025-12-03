import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Concierge for Lumina Model Management, a premier high-fashion modeling agency.
Your role is to assist potential clients, photographers, and brands in understanding our services.

Key Information about Lumina:
- Founded: 2024
- Location: New York, Paris, Milan.
- Specialties: High Fashion, Editorial, Commercial, and Runway.
- Tone: Professional, sophisticated, helpful, and concise.

Guidelines:
- Answer questions about booking models, our casting process, and agency history.
- If asked about specific model availability, politely ask them to contact the booking desk via the contact form.
- Keep responses short (under 50 words) unless asked for details.
- Be polite and maintain a luxury brand voice.
`;

let chatSession = null;

export const initializeChat = () => {
  if (chatSession) return chatSession;

  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API_KEY is not defined. AI features will be disabled.");
      throw new Error("API Key missing");
    }

    const ai = new GoogleGenAI({ apiKey });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize Gemini:", error);
    throw error;
  }
};

export const sendMessageToGemini = async (message) => {
  try {
    const chat = initializeChat();
    const result = await chat.sendMessage({ message });
    return result.text || "I apologize, but I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing connection issues. Please try again later or contact our support team directly.";
  }
};