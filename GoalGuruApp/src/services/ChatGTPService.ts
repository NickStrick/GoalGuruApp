// src/services/ChatGPTService.ts
import axios from 'axios';
import { OPENAI_API_KEY } from '@env'; // Ensure you have react-native-dotenv configured

const API_URL = 'https://api.openai.com/v1/chat/completions';

export const generateGoalIdeas = async (userPrompt: string): Promise<string> => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a helpful assistant for goal setting. You help set and Motivate towards achieveable goals.' },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 150,
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating goal ideas:', error);
    return 'Sorry, I encountered an error while generating ideas.';
  }
};
