import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change Switch to Routes
import './index.css';
import ChatArea from './components/ChatArea/chatarea.jsx';
import Login from './components/Login/login.jsx';
import Parent from './components/Login-chat-Parent/Parent.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Router>
      <Routes> 
        <Route path="/chat" element={<ChatArea />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/" element={<h1>Welcome! Please choose a route.</h1>} />
      </Routes>
    </Router> */}
    <Parent/>
  </React.StrictMode>
);