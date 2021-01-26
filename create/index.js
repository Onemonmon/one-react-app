const path = require("path");
const { mkdirp, readdir, writeFile } = require("../utils/fs");
const install = require("../utils/install");

module.exports = async function (name) {
  const projectDir = path.join(process.cwd(), name);
  await mkdirp(projectDir);
  console.log(`创建${name}文件夹成功`);
  const data = await readdir(path.resolve(__dirname, "../generator"));
  console.log(`读取模板文件成功`);
  data.forEach(async (file) => {
    const { template, dir, name: filename } = require(path.resolve(
      __dirname,
      "../generator",
      file
    ))(name);
    const fileDir = path.resolve(projectDir, dir);
    await mkdirp(fileDir);
    console.error(`创建${fileDir}文件夹成功`);
    await writeFile(path.resolve(fileDir, filename), template.trim());
    console.error(`创建${filename}文件成功`);
  });
  install({ cwd: projectDir });
};
