import { createRoot } from 'react-dom/client'
import React from 'react';
import './index.css'
import ChatArea from './components/ChatArea/chatarea.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatArea/>
  </React.StrictMode>
)
