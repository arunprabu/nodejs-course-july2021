let fs = require('fs');

// non blocking I/O
// while the file is being read, js runtime will exec the other lines
fs.readFile("sample.txt", function(err, data){
  if(err){
    return console.log(err);
  }

  console.log(data.toString());
});

// this will be printed first
console.log('Program Ended');

