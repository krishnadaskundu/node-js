
/*const dbConnect= require('./mongodb');

dbConnect().then((resp)=>{
resp.find({name:'Ravi'}).toArray().then((data)=>{
console.log(data)
})
})

const main=async ()=>{
   let data = await dbConnect();
   data = await data.find({name:'nord'}).toArray();
   console.log(data)
}

main()*/ 


const dbConnect = require('./mongodb');

dbConnect().then((res) => {
    res.find({name: 'ram'}).toArray().then((data) => {
        console.log(data);
    })
});

async function main()
{
    let data = await dbConnect();
    data = await data.find({name: 'Ravi'}).toArray();
    console.log(data);
}

main();