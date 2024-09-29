const express=require("express");
const {signUpPage, signInPage}=require("../controller/staticUserController");
const {signUp, signIn, logOut}=require("../controller/userController");

const userRouter=express.Router();

userRouter.get("/signup", signUpPage);

userRouter.get("/signin", signInPage);

userRouter.post("/signin", signIn);

userRouter.post("/signup", signUp);

userRouter.get("/logout", logOut);

module.exports={
    userRouter,
}