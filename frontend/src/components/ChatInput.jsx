import React, { useState } from 'react';

function ChatInput({ onSend, onClear }) {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onSend(question);
      setQuestion('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20, display: 'flex', gap: '10px', alignItems: 'center' }}>
      <input
        type="text"
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="Type your question..."
        style={{
          flex: 1,
          padding: '12px 15px',
          borderRadius: 8,
          border: '1px solid #90caf9',
          fontSize: 16,
          outline: 'none',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '12px 20px',
          borderRadius: 8,
          background: '#1976d2',
          color: '#fff',
          border: 'none',
          fontWeight: 'bold',
          fontSize: 16,
          cursor: 'pointer',
          transition: '0.2s'
        }}
        onMouseOver={e => e.target.style.background = '#115293'}
        onMouseOut={e => e.target.style.background = '#1976d2'}
      >
        Send
      </button>
      <button
        type="button"
        onClick={onClear}
        style={{
          padding: '12px 20px',
          borderRadius: 8,
          background: '#f44336',
          color: '#fff',
          border: 'none',
          fontWeight: 'bold',
          fontSize: 16,
          cursor: 'pointer',
          transition: '0.2s'
        }}
        onMouseOver={e => e.target.style.background = '#ba000d'}
        onMouseOut={e => e.target.style.background = '#f44336'}
      >
        Clear Chat
      </button>
    </form>
  );
}

export default ChatInput;
