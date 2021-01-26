const Users = require('../models/user');
const bcrypt = require('bcrypt');

const login = (req,res,next) => {
    if(req.session.isLoggedIn===true){
        var response = { e:"You are already logged in " };
        return res.send(response);
    }
    const {email,password} = req.body;
      Users.findOne({email},(err, user) =>{
            if(err || !user){
                const e = {e:"Please sign up first "}
                res.send(e);
            }
            else if(!bcrypt.compareSync(password, user.password)){
                const e = {e:"Please enter a valid email or password"}
                res.send(e);
            }
            else{
                req.session.user = user; 
                req.session.isLoggedIn=true;
                console.log(req.session);
                res.send(user);
            }
        })
}

exports.login = login;