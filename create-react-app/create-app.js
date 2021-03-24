const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

module.exports = function (name) {
  const projectDir = path.resolve(process.cwd(), name);
  if (fs.existsSync(projectDir)) {
    console.log(
      chalk.red(`Error: ${name} is already exist under current director`)
    );
    return;
  }
  console.log();
  console.log(`you are using one-cli to create a react project`);
  console.log(`creating ${chalk.green(name)} ...`);
  fs.mkdirSync(projectDir);
  console.log(`${chalk.green(name)} is created successfully`);
  const templateDir = path.resolve(__dirname, "template");
  const data = fs.readdirSync(templateDir);
  data.forEach(function (file) {
    const { template, dir, name } = require(path.resolve(templateDir, file))();
    console.log(`creating ${chalk.green(name)} ...`);
    const dirPath = path.resolve(projectDir, dir);
    if (dir && !fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
    fs.writeFileSync(path.resolve(dirPath, name), template);
    console.log(`${chalk.green(name)} is created successfully`);
  });
};
