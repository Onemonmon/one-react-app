import React, { useState, useEffect } from "react";
import "./App.less";
import small from "./assets/images/small.jpg";
import large from "./assets/images/large.jpg";
function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    setNum(1111);
  }, []);
  return (
    <div className="main">
      <div>这是root， num is {num}</div>
      <img className="small" src={small} alt="头像" title="头像" />
      <img className="large" src={large} alt="背景" title="背景" />
    </div>
  );
}
export default App;
