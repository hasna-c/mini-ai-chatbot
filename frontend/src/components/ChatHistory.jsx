import React from 'react';

function ChatHistory({ history }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h4 style={{ color: '#1976d2' }}>Chat History</h4>
      <div style={{
        maxHeight: 300,
        overflowY: 'auto',
        background: '#fff',
        padding: 12,
        borderRadius: 12,
        border: '1px solid #e0e0e0'
      }}>
        {history.map((item, idx) => (
          <div key={idx} style={{
            marginBottom: 12,
            padding: 12,
            background: idx % 2 === 0 ? '#e3f2fd' : '#fce4ec',
            borderRadius: 8,
            fontSize: 15,
            lineHeight: 1.5
          }}>
            <strong style={{ color: '#388e3c' }}>You:</strong> {item.question}<br />
            <strong style={{ color: '#1976d2' }}>Bot:</strong> {item.answer}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatHistory;
