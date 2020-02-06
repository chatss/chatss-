import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InforBar from "../InforBar/InforBar";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import "./Chat.css";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:6003";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    // add user 를 백에 보냄
    socket.emit("add user", { name, room });

    return () => {
      socket.emit("disconnect", room);
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  // 백에서 다시 보내준 message를 받아서 messages 배열에 추가
  useEffect(() => {
    socket.on("new message", message => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  // 백에 message를 전달
  const sendMessage = event => {
    event.preventDefault();

    if (event) {
      // 방 이름과 메세지를 전달
      socket.emit("new message", (room, message), () => setMessage(""));
    }
  };

  return (
    <div className="chat">
      <InforBar room={room} />
      <Messages messages={messages} name={name} />
      <Input
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default Chat;
