 const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        default:"default",
        set:(v)=>v===""?"https://unsplash.com/photos/vagator-or-ozran-beach-aerial-panoramic-view-in-north-goa-india-SI9OBANtEx0":v,
    },
    price:Number,
    location:String,
    country:String,
});

const Listing =mongoose.model("Listing",listingSchema);
module.exports=Listing;