import axios from 'axios';

const API_URL = 'http://localhost:8000/api/chat';

export const sendMessage = async (message) => {
    // 'message' を 'question' として送信
    const response = await axios.post(API_URL, { question: message });
    return response.data.answer;
};
