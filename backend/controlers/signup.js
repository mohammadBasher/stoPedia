const Users = require('../models/user');
const bcrypt = require('bcrypt');

const signup = (req,res,next) => {
    const data = req.body;
    data.password = bcrypt.hashSync(data.password,5);
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