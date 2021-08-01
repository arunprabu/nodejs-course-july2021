const path = require('path'); 

const fileName = __filename;
console.log(fileName); // prints the filename with dir

const extn = path.extname(fileName);
console.log(extn); // prints the file extn with .prefix 

const baseName = path.basename(fileName);
console.log(baseName); // prints the name of the file with extn - w/o dir 





