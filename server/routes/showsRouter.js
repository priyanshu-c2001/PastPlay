const express=require("express");
const Show=require("../models/shows");

const showsRouter=express.Router();

showsRouter.get("/shows", async(req, res)=>{
    const shows=await Show.find({});
    res.json(shows);
});

module.exports={
    showsRouter,
}