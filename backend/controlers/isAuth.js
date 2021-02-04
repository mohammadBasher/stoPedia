module.exports = isAuth = (req,res,next) =>{
    var response = { "username":null };
    if(!req.session.user){
        console.log("user is not logged in ");
        res.send(response);
    }
    else{
        //console.log("user is logged in");
        response.username=req.session.user.username;
        res.send(response);
    }
}