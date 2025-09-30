import React, { useState, useEffect } from 'react';
import ChatInput from './components/ChatInput';
import ChatDisplay from './components/ChatDisplay';
import ChatHistory from './components/ChatHistory';

function App() {
  const [answer, setAnswer] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = () => {
    fetch('http://127.0.0.1:5000/history')
      .then(res => res.json())
      .then(data => setHistory(data.history))
      .catch(() => setHistory([]));
  };

  const handleSend = (question) => {
    fetch('http://127.0.0.1:5000/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    })
      .then(res => res.json())
      .then(data => {
        setAnswer(data.answer);
        fetchHistory();
      })
      .catch(() => setAnswer("Backend not reachable."));
  };

  const handleClear = () => {
    fetch('http://127.0.0.1:5000/clear', { method: 'POST' })
      .then(() => {
        setHistory([]);
        setAnswer('');
      })
      .catch(() => console.log("Failed to clear chat history."));
  };

  return (
    <div style={{
      maxWidth: 700,
      margin: '50px auto',
      padding: 30,
      background: '#f5f5f5',
      borderRadius: 16,
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', color: '#1976d2', marginBottom: 30 }}>Mini AI Chatbot</h1>
      
      <ChatHistory history={history} />
      
      <ChatInput onSend={handleSend} onClear={handleClear} />
      
      <ChatDisplay answer={answer} />
    </div>
  );
}

export default App;
