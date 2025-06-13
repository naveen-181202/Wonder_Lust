const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Review=require('./review.js')

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
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
});


//middleware delete after delete the listing delete reviews
listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in: listing.reviews}});
    }
});

const Listing =mongoose.model("Listing",listingSchema);
module.exports=Listing;