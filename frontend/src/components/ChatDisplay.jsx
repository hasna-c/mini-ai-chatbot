import React from 'react';

function ChatDisplay({ answer }) {
  return (
    <div style={{
      marginTop: 20,
      minHeight: 40,
      background: '#e3f2fd',
      padding: 12,
      borderRadius: 8,
      fontSize: 16
    }}>
      <strong style={{ color: '#1976d2' }}>Bot:</strong> {answer}
    </div>
  );
}

export default ChatDisplay;