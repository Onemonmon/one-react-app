module.exports = function (name) {
  const template = `
{
  "name": "${name}",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {},
  "devDependencies": {
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "antd": "^4.10.0",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router-dom": "^5.2.0"
  }
}
  `;
  return { template, dir: "", name: "package.json" };
};
