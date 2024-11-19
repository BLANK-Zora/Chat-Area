import React, { useState } from 'react';
import './chatarea.css';

const ChatArea = ({senderID}) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  console.log(senderID);


  const handleSendMessage = async (event) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      // Add the user's message to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, sender: `${senderID}` },
      ]);
      setInputValue('');
  
      try {
        // Send the user's message to the Rasa server
        const response = await fetch('http://localhost:5005/webhooks/rest/webhook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sender: `${senderID}`, // Unique identifier for the conversation
            message: inputValue, // Message sent by the user
          }),
        });
        if (response.ok) {
          const botResponses = await response.json();
          const newMessages = botResponses.map((botResponse) => ({
            text: botResponse.text,
            sender: 'bot',
          }));
          // Update state with all new messages at once
          setMessages((prevMessages) => [...prevMessages, ...newMessages]);
        } else {
          console.error('Failed to fetch response from Rasa server');
        }
      } catch (error) {
        console.error('Error communicating with Rasa server:', error);
      }
    }
  };



  return (
    
    <div className="chat-area">
      <div className="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message-bubble ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="typing-area">
        <input
          type="text"
          placeholder="Type a message..."
          aria-label="Message input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleSendMessage}
          className="message-input"
        />
      </div>
    </div>
  );
};

export default ChatArea;