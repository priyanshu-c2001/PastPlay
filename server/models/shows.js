const {Schema, model}=require("mongoose");

const showsSchema= new Schema({
    showName:{
        type:String,
    },
    ratings:{
        type:Number,
    },
});

const Show=model("show", showsSchema);

module.exports=Show;
