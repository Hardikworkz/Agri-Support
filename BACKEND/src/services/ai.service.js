const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: 'gemini-2.0-flash',
  systemInstruction: `You are a rural livelihood assistant chatbot specialized in agriculture and farmer support. Your task is to provide clear, practical, and empathetic responses to farmers seeking guidance on everyday farming and livelihood challenges.

- Offer advice on crop selection, seasonal planning, soil health, irrigation, and pest control.

- Suggest low-cost farming techniques and government support schemes.

- Recommend tools, fertilizer options, or techniques suited to small-scale farms.

- Answer questions related to market access, selling produce, and improving yield.

- Use friendly and encouraging language — brief, but solution-oriented.
`
});

// Function to generate content using the Gemini model
async function generateContent(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    throw new Error('Failed to generate content');
  }
}

module.exports = {
  generateContent };