import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import TopPage from './components/TopPage';
import ChatPage from './components/ChatPage';

// ページ全体をラップするコンテナ
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;  // ページ全体の高さを画面全体に広げる
`;

// ヘッダーのスタイル
const Header = styled.header`
  background-color: #333;
  padding: 20px;
  text-align: center;
  color: #fff;
`;

// ナビゲーションのスタイル
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

// コンテンツ全体のコンテナ
const Container = styled.main`
  flex-grow: 1;  // ここで残りの領域を埋める
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

// フッターのスタイル
const Footer = styled.footer`
  text-align: center;
  padding: 10px 0;
  background-color: #f0f0f0;
  color: #555;
  margin-top: auto;  // フッターを一番下に配置
`;

function App() {
  return (
    <Router>
      <PageWrapper>
        <Header>
          <h1>ChatGPT-like App</h1>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/chat">Chat</Link>
          </Nav>
        </Header>
        <Container>
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </Container>
        <Footer>© 2024 ChatGPT-like App</Footer>
      </PageWrapper>
    </Router>
  );
}

export default App;
