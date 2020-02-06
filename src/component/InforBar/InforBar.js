import React from "react";

import "./InforBar.css";
const InforBar = ({ room }) => {
  return (
    <div className="InforBar">
      <div>{room}에 오신걸 환영합니다</div>
      <a href="/">나가기</a>
    </div>
  );
};

export default InforBar;
