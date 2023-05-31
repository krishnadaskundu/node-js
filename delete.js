const dbConnect = require("./mongodb");

/*const dbConnect = require('./mongodb');

const deleteData=async ()=>{
let data = await dbConnect();
let result = await data.deleteMany({name:'max 7'})
console.log(result)

}
 
deleteData();*/
const deleteData= async () =>{
    let data = await dbConnect();
    let result = await data.deleteMany({name: 'Sunil'});
    console.log(result);
    if(result.acknowledged){
        console.log("Record Deleted")
    }
}

deleteData();