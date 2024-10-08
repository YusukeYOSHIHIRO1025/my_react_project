import React, { useState } from 'react';
import { sendMessage } from '../api/chatAPI';
import styled from 'styled-components';

// スタイリングの定義
const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: auto;
    max-width: 800px;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    background-color: #f5f5f5;
`;

const MessagesContainer = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    margin-bottom: 20px;
    padding-right: 10px;
`;

const Message = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
`;

const MessageBubble = styled.div`
    background-color: ${props => (props.isUser ? '#007bff' : '#e0e0e0')};
    color: ${props => (props.isUser ? '#fff' : '#000')};
    padding: 10px 15px;
    border-radius: 20px;
    max-width: 70%;
    word-wrap: break-word;
    font-size: 14px;
`;

const InputContainer = styled.div`
    display: flex;
    padding: 10px;
    background-color: #fff;
    border-top: 1px solid #ddd;
    border-radius: 10px;
`;

const InputField = styled.input`
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 16px;
    margin-right: 10px;
`;

const SendButton = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #0056b3;
    }
`;

const Header = styled.h1`
    text-align: center;
    margin-bottom: 20px;
    color: #333;
`;

const ChatPage = () => {
    const [message, setMessage] = useState('');
    const [responses, setResponses] = useState([]);

    const handleSend = async () => {
        if (!message.trim()) return; // メッセージが空の場合、何もしない
        // ユーザーメッセージを追加
        setResponses([...responses, { message, isUser: true }]);
        const response = await sendMessage(message);
        // AIのレスポンスを追加
        setResponses(prevResponses => [...prevResponses, { message: response, isUser: false }]);
        setMessage(''); // メッセージ送信後、入力フィールドをクリア
    };

    return (
        <ChatContainer>
            <Header>チャットを開始しましょう！</Header>
            <MessagesContainer>
                {responses.map((res, index) => (
                    <Message key={index} isUser={res.isUser}>
                        <MessageBubble isUser={res.isUser}>
                            {res.isUser ? `質問: ${res.message}` : `回答: ${res.message}`}
                        </MessageBubble>
                    </Message>
                ))}
            </MessagesContainer>
            <InputContainer>
                <InputField
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="メッセージを入力してください"
                />
                <SendButton onClick={handleSend}>送信</SendButton>
            </InputContainer>
        </ChatContainer>
    );
};

export default ChatPage;
