import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="Join">
      <div>
        <h1>Join</h1>
        <div>
          <input
            placeholder=""
            type="text"
            onChange={event => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            placeholder=""
            type="text"
            onChange={event => {
              setRoom(event.target.value);
            }}
          />
        </div>
        <Link
          // 둘 중 하나라도 미입력시 제출 x
          onClick={event => (!name || !room ? event.preventDefault() : null)}
          to={`/chat/?name=${name}&room=${room}`}
        >
          <button type="submit">Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
