const Users = require('../models/user');

const signup = (req,res,next) => {
    const data = req.body;
    const user = new Users(req.body);
    user.save((err,user) => {
        if(err){
            console.log(data);
            console.log("Some error occured in save method");
            console.log(err);
        }
        else{
            console.log("data saved succesfully!!");
            console.log(data);
            res.send(data);
        }
    })
}

exports.signup = signup;