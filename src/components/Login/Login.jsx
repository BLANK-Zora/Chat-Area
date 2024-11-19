import React from 'react';
import { useState } from 'react';
import './login.css';

const Login = ({onEmailChange}) => {
    const [email, setEmail] = useState('')
    const [inputValue, setInputValue] = useState('')

    const handleEmailChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleLogin = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(inputValue)) {
            onEmailChange(inputValue); // Pass the email up to the parent
            setInputValue('');
        } else {
            alert('Please enter a valid email address.');
        }
    };

  return (
    <div className="login-container">
        <div className="login-card">
            <h1 className="login-title">Login</h1>
            <input 
                type="text" 
                placeholder="Email"
                className='login-input-box'
                onClick={handleEmailChange}
            />
            <button className='login-button' onClick={handleLogin}>Login</button>
        </div>
    </div>
  );
}

export default Login;