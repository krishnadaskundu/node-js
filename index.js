/*const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});

//1
const saveInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        name: "max 100",
        price: 200,
        brand: 'maxx',
        category: 'Mobile'
    });
    const result = await data.save();
    console.log(result);
}

//2
const updateInDB =async  () => {
    const Product = mongoose.model('products', productSchema);
    let data =await  Product.updateOne(
        { name: "max 6" },
        {
            $set: { price: 550,name:'max pro 6' }
        }
    )
    console.log(data)
}

//3
const deleteInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({name:'max 100'})
    console.log(data);
}

//4
const findInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find({name:'max pro 611'})
    console.log(data);
}

findInDB();*/


const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/hotel')

const roomSchema =  new mongoose.Schema({
    name:String,
    age:Number
});

const saveInDB = async ()=>{
    const room = mongoose.model('rooms', roomSchema);
    let data = new room({
        name:'Madhva',
        age: 24
    });
    const result = await data.save();
    console.log(result);
}

//saveInDB();

const updateInDB = async () =>{

    const room = mongoose.model('rooms', roomSchema);
    const data = await room.updateOne(
        {name:'govinda'},
        {
            $set:{name: "Hari", age: 15}
        }
    )

    console.log(data)
}

//updateInDB();

const deleteInDB = async ()=>{
    const room = mongoose.model('room',roomSchema);
    const data = await room.deleteOne({name:"govinda"});
    console.log(data);

}

//deleteInDB();

const findInDB = async ()=>{
    const room = mongoose.model('room',roomSchema);
    const data = await room.find({});
    console.log(data);

}

findInDB();
