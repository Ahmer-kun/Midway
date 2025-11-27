
import { GoogleGenAI } from "@google/genai";

export const askAIAssistant = async (prompt: string): Promise<string> => {
  try {
    // Initialize the client specific to this call to ensure the latest API key is used
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: `You are a helpful virtual assistant for Midway Hospital. 
You provide general health information and answer patient questions in a clear, friendly, and reassuring tone.
You are not a medical professional and cannot give medical advice or diagnoses. 
You MUST ALWAYS include the following disclaimer at the end of every response, formatted exactly as shown:
"---
**Disclaimer:** This information is for general guidance and not a substitute for professional medical advice. Please consult a qualified healthcare provider for any health concerns."`,
      },
    });

    return response.text ?? "I apologize, but I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later. If this is a medical emergency, please call your local emergency number (e.g., Rescue 1122 for Karachi).";
  }
};
