const app=require('./app')
let arr=[4,1,6,3,4,89,0];
console.log(app.xyz())
const result =arr.filter((item)=>{
    return item>=4
});
console.warn(result);

/* 
    core modules:
    console (global module),
    __filename (global module),
    fs, 
    Buffer used for processing data, 
    HTTP used for API calls
*/ 
const fs = require('fs');
// create the file named abc.text and 2nd parameter is contain in the text. 
fs.writeFileSync('abc.txt', "This is fs 12");

 //To console the directory name
console.log(__dirname);
//To console the file name
console.log(__filename);