import React, { useState, useEffect } from "react";
import small from "@/assets/images/small.jpg";
import "@/App.less";

function App() {
  const [num, setNum] = useState<number>(0);
  useEffect(() => {
    setNum(1111);
  }, []);
  return (
    <div className="main">
      <div>这是root， num is {num}</div>
      <img className="small" src={small} alt="头像" title="头像" />
      <div className="large"/>
    </div>
  );
}
export default App;
