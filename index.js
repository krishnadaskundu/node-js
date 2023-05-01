const fs = require('fs');

const input = process.argv;

if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3])
}
else
{
    console.log("invalid input ")
}


// node index.js other red.txt 'this is color'
/*
const fs = require('fs');
const input2 = process.argv;

if (input2[2] == 'add') {
    
    fs.writeFileSync(input2[3],input2[4]);
}else if (input2[2] == 'remove') {
    fs.unlinkSync(input2[3])

} else {
    console.log("invalid input ")
}

*/
