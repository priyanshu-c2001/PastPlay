const express = require('express');
const cookieParser=require("cookie-parser");
const path = require('path');
const { link } = require("./connect");
const videoRoutes = require("./routes/video");
const {userRouter}=require("./routes/user");
const {uploadRouter}=require("./routes/uploadRoute");
const {watchlistRouter}=require("./routes/watchlist");
const {showsRouter}=require("./routes/showsRouter");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");

const app = express();
const PORT = 3000;
const mongoURI = "mongodb://127.0.0.1:27017/ott_platform";

link(mongoURI).then(() => {
  console.log("MongoDB Connected!");
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));
app.use('/build', express.static('build'));

app.use('/', videoRoutes);
app.use('/user', userRouter);
app.use('/', watchlistRouter);
app.use('/', uploadRouter);
app.use('/', showsRouter);

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}!`);
});
