/*const dbConnect= require('./mongodb')

const updateData=async ()=>{
    let data = await dbConnect();
    let result = await data.update(
        { name:'max 5'},
        {
            $set:{name:'max pro 5', price:1000}
        }
        )
    console.log(result)

}

updateData();
*/

const dbConnect = require('./mongodb');

const  updateData = async () =>{
    let data = await dbConnect();
    let result = await data.update(
        {name: 'jadu'},
        {
            $set:{name:'JaduH', age: 15}
        }
    )
    console.log(result);
}

updateData();
