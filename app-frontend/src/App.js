import React,{useState} from "react";
import SockJsClient from "react-stomp";
import "./App.css";
import Header from "./components/LoginForm/sub-components/Header";
import Login from "./components/LoginForm/Login";
import Input from "./components/InputFields/Input";
import Messages from "./components/Messages/Message";
import chatapi from "./services/chatapi";
import "bootstrap/dist/css/bootstrap.min.css";

const SOCKET_URL = 'http://localhost:8080/ws-chat/';

const App = () => {
  const [messages, setMessages] = useState([])
  const [user, setUser] = useState(null)

  let onConnected = () => {
    console.log("Connected!!")
  }

  let randomColor = ()=>{
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }
  let onMessageReceived = (msg) => {
    console.log('New Message Received!!', msg);
    setMessages(messages.concat(msg));
  }

  let onSendMessage = (msgText) => {
    chatapi.sendMessage(user.username, msgText).then(res => {
      console.log('Sent', res);
    }).catch(err => {
      console.log('Error Occured while sending message to api');
    })
  }

  let handleLoginSubmit = (username) => {
    console.log(username, " Logged in..");

    setUser({
      username: username,
      color: randomColor()
    })

  }

  return (
    <div className="App">
      {!!user ?
        (
          <>
            <SockJsClient
              url={SOCKET_URL}
              topics={['/topic/group']}
              onConnect={onConnected}
              onDisconnect={console.log("Disconnected!")}
              onMessage={msg => onMessageReceived(msg)}
              debug={false}
            />
            <Header name={user.username}/>
            <Messages
              messages={messages}
              currentUser={user}
            />
            <Input onSendMessage={onSendMessage} />
            
          </>
        ) :
        <Login onSubmit={handleLoginSubmit} />
      }
    </div>
  )
}

export default App;
