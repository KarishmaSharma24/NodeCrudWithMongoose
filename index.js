const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/ecom");

const ProductSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String,
});

const create = async()=>{
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = new ProductModel({name:"papa", price:200, brand:"vivo", category:'..'});
    let result = await data.save();
    console.log(result);
}

const update = async()=>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne(
        {name:"papa"},
        { 
            $set : {price:800}
        }
    );
    console.log(data);
}

const deleteData = async()=>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteMany({name: "mummy"});
    console.log(data);
}

const findData = async ()=>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.find({name:"simran"});
    console.log(data);
}
// create()

// update()

// deleteData();

findData();