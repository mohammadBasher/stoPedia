const Users = require('../models/user');

const login = (req,res,next) => {
    const {email,password} = req.body;
    console.log(req.body);
        Users.findOne({email},(err, user) =>{
            if(err || !user){
                console.log("some error occured");
                res.send("Email not exist");
            }
            else if(user.password != password){
                res.send("your email and password doesn't match");
            }
            else{
                console.log(user.username);
                res.send(user);
            }
        })
}

exports.login = login;