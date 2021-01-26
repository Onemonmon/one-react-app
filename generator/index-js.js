module.exports = function (name) {
  const template = `
import React from "react";
import ReactDom from "react-dom";
import App from "@/App.tsx";

ReactDom.render(<App />, document.getElementById("root"));
`;
  return { template, dir: "./src", name: "index.js" };
};
