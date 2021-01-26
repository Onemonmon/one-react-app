module.exports = function (name) {
  const template = `
import React from "react";
import HelloWorld from "@/components/HelloWorld";
  
function App() {
  return <HelloWorld name="one" />;
}
export default App;
`;
  return { template, dir: "./src", name: "App.tsx" };
};
