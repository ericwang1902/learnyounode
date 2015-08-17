
var fs = require('fs');
var file = process.argv[2];
var data=fs.readFileSync(file);//默认从根目录下面开始
var linenum = data.toString().split('\n').length - 1
console.log(linenum);


