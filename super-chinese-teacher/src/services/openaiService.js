import OpenAI from 'openai';

let openai = null;

// Get environment variables with defaults
const getMaxTokens = () => {
  const envMaxTokens = process.env.REACT_APP_CHAT_MAX_TOKENS;
  return envMaxTokens ? parseInt(envMaxTokens, 10) : 200;
};

const getTemperature = () => {
  const envTemperature = process.env.REACT_APP_CHAT_TEMPERATURE;
  return envTemperature ? parseFloat(envTemperature) : 0.7;
};

// Initialize OpenAI client
export const initOpenAI = (apiKey) => {
  openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true // Note: In production, you should use a backend proxy
  });
  return openai;
};

// Get OpenAI client
export const getOpenAI = () => {
  if (!openai) {
    throw new Error('OpenAI client not initialized. Call initOpenAI first.');
  }
  return openai;
};

// Send a message to ChatGPT and get a response
export const sendMessageToGPT = async (messages) => {
  try {
    const response = await getOpenAI().chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: getTemperature(),
      max_tokens: getMaxTokens(),
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    throw error;
  }
};

// Create a system message for the Chinese teacher
export const createChineseTeacherSystemMessage = () => {
  return {
    role: "system",
    content: `You are a friendly Chinese tutor called Super Chinese Tutor. Your goal is to help the student practice conversational Mandarin Chinese.

For every Chinese character or phrase you write, always include pinyin pronunciation in parentheses immediately after.
Example: 你好 (nǐ hǎo)! 我是你的中文老师 (wǒ shì nǐ de zhōngwén lǎoshī).

Always provide an English translation on a new line after each Chinese sentence.
Example:
你好 (nǐ hǎo)！我是你的中文导师 (wǒ shì nǐ de zhōngwén dǎoshī)。
Hello! I am your Chinese tutor.

Keep your responses in simple Chinese with pinyin, followed by English translations. 
Be encouraging and patient. Ask questions to keep the conversation going. 
Focus on practical, everyday Chinese. If the student makes mistakes, gently correct them. 
Start with a friendly greeting in Chinese with pinyin and its English translation.`
  };
};

// For backward compatibility
export const createFrenchTeacherSystemMessage = createChineseTeacherSystemMessage; 