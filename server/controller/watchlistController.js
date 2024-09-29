const {WATCHLIST}=require("../models/watchlist");

async function watchlist(req, res){
    const allFavs=await WATCHLIST.find({createdBy:req.user._id});
    res.render("mySpace", {
        favs:allFavs,
    });
}

async function addToWatchlist(req, res){
    const body=req.body;
    await WATCHLIST.create({
       title: body.title,
       rating:body.rating,
       thumbnail:body.thumbnail,
       createdBy: req.user._id,
    });
    res.json({success:true});
}

module.exports={
    watchlist,
    addToWatchlist,
}