// let path = require("path");
// let fs = require("fs");
// let fsPromise = fs.promises;
// let filename = path.join(__dirname,"./good.json");

// fsPromise.readFile(filename,"utf-8").then(data=>{
// 	// 读出来的是个json   转成能操作的对象
// 	data = JSON.parse(data);
// //	fsPromise.writeFile({
// //		id:2,
// //		name:"苹果"
// //	});
// 	// 写入数据的时候要把对象转成json
// //	fsPromise.writeFile(filename,JSON.stringify(data),"utf-8");
// 	console.log(data)
//  console.log('我这下完了')
// });


let path = require('path')
let fs = require('fs')
let fsPromise = fs.promises;
let filename = path.join(__dirname, './good.json')

fsPromise.readFile(filename, 'utf-8').then(data => {
  data = JSON.parse(data)

  // console.log(data)
  for (item in data) {
    if (data[item].id === 1) {
      data[item].name = '香蕉'
    }
  }
  console.log(data)
  fsPromise.writeFile(filename, JSON.stringify(data), 'utf-8')
  console.log('我执行完了')
})
