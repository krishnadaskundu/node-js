const mongooes= require('mongoose');

const main = async ()=>{
  await mongooes.connect("mongodb://localhost:27017/hotel");
  const roomSchema  = new mongooes.Schema({
    name:String,
    age:Number
  });
  const roomModel = mongooes.model("room", roomSchema);
  let data = new roomModel({name:"govinda",age:24})
  let result = await data.save();
  console.log(result);
}
main();
