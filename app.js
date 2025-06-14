const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Listing=require('./models/listing.js');
const path=require('path');
const methodOverride=require('method-override');
const ejsMate=require('ejs-mate');

const mongo_rul ='mongodb://127.0.0.1:27017/wonderlust';

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
})

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,'/public')));

async function main(){
    await mongoose.connect(mongo_rul);
}

//listings
app.get('/listings',async (req,res)=>{
    const allListings=await Listing.find({});
    res.render("./listings/index.ejs",{allListings});
});

//New Route
app.get('/listings/new', (req, res) => {
   res.render('listings/new.ejs');
})

//show route
app.get('/listings/:id',async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render('./listings/show.ejs',{listing})
})

//Create Route
app.post('/listings',async (req,res)=>{
    let listing =req.body.listing;
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    res.redirect('/listings');
})

//Edit Route
app.get("/listings/:id/edit",async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render('listings/edit.ejs',{listing});
});



//Update Route
app.put('/listings/:id',async (req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
})

//Delete Route
app.delete('/listings/:id',async (req,res)=>{
    let {id}=req.params;
    let deleteListing=await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    res.redirect('/listings');
})

app.get('/testListing',async (req,res)=>{
    const samplelisting=new Listing({
        title:"My new Villa",
        description:"By the beach",
        price :1200,
        location:"Calangite,Goa",
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