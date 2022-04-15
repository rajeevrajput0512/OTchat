import React from "react";
import renderMessage from "./renderMessage";
import "./Message.css";

const Messages = ({messages,currentUser}) => {
    return (
        <ul className="Messages">
            {messages.map(message => renderMessage({message,currentUser}))}
        </ul>
    );
}

export default Messages;