const user = require('../../models/user');

module.exports = (req,res,next) => {
    const usern = req.body.username;
    user.find({ username : { $regex : usern}},(err,users) => {
        console.log(users);
        const usernames = [];
        for(var i=0;i<users.length;i++){
            usernames.push(users[i].username);
        }
        res.send(usernames);
    }).sort({username:"asc"})
    .catch(err => {
        console.log(err);
    })
}