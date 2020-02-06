import React from "react";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <div>
      <form>
        <input
          text="text"
          value={message}
          placeholder="type a message..."
          onChange={event => setMessage(event.target.value)}
          onKeyPress={event =>
            (event.ket = "Enter" ? sendMessage(event) : null)
          }
        />
        <button type="submit" onClick={event => sendMessage(event)}>
          전송
        </button>
      </form>
    </div>
  );
};

export default Input;
