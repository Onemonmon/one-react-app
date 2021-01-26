const fs = require("fs");
const promise = require("./promise");
const mkdirp = require("mkdirp");

exports.writeFile = promise(fs.writeFile);
exports.readdir = promise(fs.readdir);
exports.mkdirp = promise(mkdirp);
