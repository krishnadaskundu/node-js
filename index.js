/*const express = require('express');
require("./config");
const Product = require('./product');
const app = express();

app.use(express.json());
app.post("/create", async (req, resp) => {
    let data = new Product(req.body);
    const result = await data.save();
    resp.send(result);
});

app.get("/list", async (req, resp) => {
    let data = await Product.find();
    resp.send(data);
})

app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await Product.deleteOne(req.params);
    resp.send(data);
})


app.put("/update/:_id",async (req, resp) => {
    console.log(req.params)
    let data = await Product.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
})

app.listen(5000)*/

const express = require('express');
require('./config');
const room = require('./room')
const app = express();

app.use(express.json())

app.post("/create", async (req, res)=>{
    const data = new room(req.body);
    const result = await data.save();
    res.send(result);

});

app.get("/list", async (req, res)=>{
    const data = await room.find()   
    res.send(data);

})

app.delete("/delete/:_id", async (req, res)=>{
    console.log(req.params)
    const data = await room.deleteOne(req.params)   
    res.send(data);

})

app.put("/update/:_id", async (req, res)=>{
    console.log(req.params)
    const data = await room.updateOne(
        req.params,
        {
            $set:req.body
        }
        )   
    res.send(data);

})



app.listen(5555);