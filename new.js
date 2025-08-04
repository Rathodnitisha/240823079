// pro-1(file-path)
const path = require("path");
console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.extname("myfile.txt"));

// pro-2(file-moment)
const moment = require("moment");
console.log(moment().format("DD-MM-YYYY HH:MM"));
console.log(moment().add(7,"days").format("DD-MM-YYYY HH:MM"));
console.log(moment().format('DDDD'));
console.log(moment());

// pro-3(file-fs.write)
const fs = require("fs");
fs.writeFile("txt.txt","hellow",function(err){
      if (err)throw err;
      console.log("file save!");
});

// (file-fs.read)
fs.readFile("txt.txt","utf8",function(err,data){
      if (err)throw err;
      console.log("file content:",data);
});



