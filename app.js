const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Listing=require('./models/listing.js');

const mongo_rul ='mongodb://127.0.0.1:27017/wonderlust';

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(mongo_rul);
}

app.get('/testListing',async (req,res)=>{
    const samplelisting=new Listing({
        title:"My new Villa",
        description:"By the beach",
        price :1000,
        location:"Bardev,Goa",
        country:"India",
    });

    await samplelisting.save();
    console.log("Sample was saved");
    res.send("Succesfull testing");
})

app.get('/',(req,res)=>{
    res.send("Hi , I am root");
})
app.listen(8080,()=>{
    console.log("server is listening to port 8080")
})