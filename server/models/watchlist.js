const mongoose=require("mongoose");

const watchlistSchema=new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    rating:{
        type:Number,
    },
    thumbnail:{
        type:String,
        required:true,
        unique: true,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }
});

const WATCHLIST=mongoose.model("watchlist", watchlistSchema);

module.exports={
    WATCHLIST,
}