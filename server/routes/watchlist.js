const express=require("express");
const {watchlist, addToWatchlist}=require("../controller/watchlistController");

const watchlistRouter=express.Router();

watchlistRouter.post("/add-to-watchlist", addToWatchlist);

watchlistRouter.get("/watchlist", watchlist);

module.exports={
    watchlistRouter,
}
