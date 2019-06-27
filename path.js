let path = require("path");
__dirname; // 绝对路径
console.log(__dirname);

let r = path.resolve(__dirname,"app.js"); // 了解resolve可以多拼接一层(__dirname,"/a","app.js")
let rl = path.join(__dirname,"app.js")
console.log(r);

