const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath,'this is a simple file');
// fs.readFile(filePath,'utf8',(err,item)=>{
// console.log(item);
// })
// fs.appendFile(filePath,' for fruits',(err)=>{
// if(!err) console.log("file is updated")
// })
// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
// if(!err) console.log("file name is updated")
// })

//fs.unlinkSync(`${dirPath}/fruit.txt`);


/*const fs = require('fs');
const path = require('path');
const dirPath2 = path.join(__dirname, 'crud');
const filePath2 = `${dirPath2}/apple.txt`;

fs.writeFileSync(filePath2, "abc");
fs.readFile(filePath2, 'utf8', (err, iteam) => {
    console.log(iteam);
})

fs.appendFile(filePath2, " and def", (err)=>{
    if(!err) console.log("file is updated");
})

fs.rename(filePath2, dirPath2+"/fruit.txt" , (err)=>{
    if(!err) console.log("file name is updated");
})

fs.unlinkSync(dirPath2+"/fruit.txt");*/
