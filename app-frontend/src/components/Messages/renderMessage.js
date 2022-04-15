import React from 'react';
import './Message.css';


let renderMessage = ({message,currentUser}) => {
    const { sender, content, color } = message;
    const messagefrom = currentUser.username === message.sender;
    const className = messagefrom ? "Messages-message currentUser" : "Messages-message";
    return (
        <li className={className}>
            <span
                className="avatar"
                style={{ backgroundColor: color }}
            />
            <div className="Message-content">
                <div className="username">
                    {sender}
                </div>
                <div className="text">{content}</div>
            </div>
        </li>
    );
};

export default renderMessage;