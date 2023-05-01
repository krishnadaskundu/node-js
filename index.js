const fs= require('fs');
const path=require('path');
const dirPath= path.join(__dirname,'files');
console.log(dirPath)
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,"some simple text in file")

// }
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.warn("file name is : ",item)
    });
}
)

/*
const fs = require('fs');
const path = require('path');
const dirPath2 = path.join(__dirname,"files");
 
for (let index = 0; index < 5; index++) {
    fs.writeFileSync(dirPath2+"file"+index+".txt", "text");
    
}

fs.readdir(dirPath2, (err, files)=>{
    files.forEach((item)=>{

        console.log(item);
    })

})

*/