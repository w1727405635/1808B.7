let fs = require("fs");
let fsPromise = fs.promises // node 10版本以上
let path = require("path")
// 读取文件
//fsPromise.readfile 参数,文件路径 读取格式
//方式Promise.readFile()
fsPromise.readFile(path.join(__dirname,"app.js"),"utf-8").then(data => {
	console.log(data);
});
// fsPromise.readFile("app.js","utf-8").then(data => {
// 	console.log(data);
// });
//写入文件 writeFile 参数 1 要写入的文件路径，2.要写入的数据 3.写入的数据格式
// 写入的数据会把文件以前的数据覆盖
fs.promises.writeFile("./a.txt","你好,我打开了txt","utf-8").then(data => {
	console.log(data)	
	console.log("写入成功")
});

// 读取 json 转对象 数组 push 放数组的数据 导入文件
