const fs = require('fs');

let content = 'My File writing example';

fs.writeFile('example.txt', content , function(err){
  if(err){
    return console.log(err);
  }

  console.log("File written Successfully!");
});

console.log("Program Ended");