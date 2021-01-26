
const logout = (req,res,next) => {
    req.session.destroy((err) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(req.session);
            console.log("session has been deleted");
        }
    })
}

exports.logout = logout;