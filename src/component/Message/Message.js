import React from "react";

const Message = ({ message: { username, message }, name }) => {
  let isSentByCurrentUser = false;
  const trimmendName = name.trim().toLowerCase();

  if (username === trimmendName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div>
      <p>{trimmendName}</p>
      <div className="messageBox">
        <p>{message}</p>
      </div>
    </div>
  ) : (
    <div>
      <div className="messageBox">
        <p>{message}</p>
      </div>
      <p>{username}</p>
    </div>
  );
};

export default Message;
