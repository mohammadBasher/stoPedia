module.exports = isAuth = (req,res,next) =>{
    var response = { "err":"false" };
    if(!req.session.user){
        console.log("user is not logged in ");
        response.err = "true";
        res.send(response);
    }
    else{
        //console.log("user is logged in");
        res.send(response);
    }
}