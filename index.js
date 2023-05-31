const dbConnect= require('./mongodb');

dbConnect().then((resp)=>{
resp.find({name:'ram'}).toArray().then((data)=>{
console.log(data)
})
})

const main=async ()=>{
   let data = await dbConnect();
   data = await data.find({name:'Ravi'}).toArray();
   console.log(data)
}

main()
