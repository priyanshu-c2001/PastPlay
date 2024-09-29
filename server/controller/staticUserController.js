function signUpPage(req, res){
    return res.render("signup");
} 

function signInPage(req, res){
    return res.render("signin");
} 

module.exports={
    signUpPage,
    signInPage
}