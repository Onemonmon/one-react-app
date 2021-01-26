module.exports = function (name) {
  const template = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OneReact脚手架</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;
  return { template, dir: "./public", name: "index.html" };
};
