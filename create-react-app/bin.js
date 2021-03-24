#!/usr/bin/env node

const commander = require("commander");
const path = require("path");
const fs = require("fs");
const packageInfo = require("../package.json");

const program = new commander.Command(packageInfo.name)
  .version(packageInfo.version)
  .command("create [dir-name]")
  .description("使用 one-cli 创建一个新的项目")
  .option("-d --dir <dir>", "创建目录")
  .action((name) => {
    if (name) {
      const create = require("./create-app");
      create(name);
    }
  })
  .on("option:dir", function (res) {
    console.log(process.cwd(), res);
    const dirPath = path.resolve(process.cwd(), res);
    !fs.existsSync(dirPath) && fs.mkdirSync(dirPath);
  })
  .parse(process.argv);
