import React from 'react';
import { Link } from 'react-router-dom';

const TopPage = () => {
    return (
        <div>
            <h1>ChatGPT-like Appへようこそ</h1>
            <Link to="/chat">チャットを始める！</Link>
        </div>
    );
};

export default TopPage;
