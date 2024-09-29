const {User}=require("../models/user");

async function signUp(req, res){
    const {fullName, email, password}=req.body;
    await User.create({
        fullName,
        email,
        password,
    });
    res.redirect('/');
}

async function signIn(req, res){
    const {email, password}=req.body;
    try{
        const token=await User.matchPasswordAndGenerateToken(email, password);
        return res.cookie("token", token).redirect('/movies.html');
    }
    catch (error) {
        return res.render("signin", {
            error:"Incorrect Email or Password",
        });
    }
}

function logOut(req, res){
    res.clearCookie("token").redirect('/');
}

module.exports={
    signUp,
    signIn,
    logOut
}