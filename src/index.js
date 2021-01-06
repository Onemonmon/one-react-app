// import "core-js/stable";
// import "regenerator-runtime/runtime";
import React from "react";
import ReactDom from "react-dom";
import App from "@/App.tsx";

const arr = [1, 2, 3];

const set = new Set(arr);

console.log(set.has(1));
console.log(arr.includes(1));

ReactDom.render(<App />, document.getElementById("root"));
