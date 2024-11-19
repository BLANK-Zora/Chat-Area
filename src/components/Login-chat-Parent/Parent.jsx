import React, { useState } from 'react';
import Login from '../Login/login';
import ChatArea from '../ChatArea/chatarea';

const Parent = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (newEmail) => {
        setEmail(newEmail);
    };

    return (
        <div>
            {!email ? (
                <Login onEmailChange={handleEmailChange} />
            ) : (
                <ChatArea senderID={email} />
            )}
        </div>
    );
};

export default Parent;