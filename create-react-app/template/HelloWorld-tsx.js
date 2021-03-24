module.exports = function (name) {
  const template = `
import React from "react";

interface IProps {
  name: string
}
const HelloWorld: React.FC<IProps> = ({name}) => {
  return <div>你好{name}，欢迎使用one-cli脚手架！</div>
}
HelloWorld.defaultProps = {
  name: 'onemonmon'
}
export default HelloWorld
`;
  return { template, dir: "./src/components", name: "HelloWorld.tsx" };
};
