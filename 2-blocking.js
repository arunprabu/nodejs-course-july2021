// work with fs
let fs = require("fs"); // importing file system

let data = fs.readFileSync("sample.txt");// read file synchrously  -- so it's a blocking I/O

// will be printed first
console.log(data.toString());

// will be printed last1
console.log("Program Ended");
