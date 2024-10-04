import React, { useState, useEffect } from 'react';
import styled from 'styled-components';  // styled-componentsをインポート

// スタイル定義
const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 20px;
  font-size: 0.9rem;
  color: #aaa;
`;

const Home = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchGeneratedText = async () => {
      const response = await fetch('http://127.0.0.1:8000/generate-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: 'Create a welcoming message for the homepage' }),
      });
      const data = await response.json();
      setContent(data.generated_text);
    };

    fetchGeneratedText();
  }, []);

  return (
    <Container>
      <Title>Welcome to the Home Page</Title>
      <Text>{content}</Text>
      <Footer>© 2024 Your Company</Footer>
    </Container>
  );
}

export default Home;
