const blogs = require('../../models/blogs');
const user = require('../../models/user');

module.exports = (req,res,next) =>{
    console.log(req.session);
    var response = { "err":"false" };
    if(!req.session.user){
        console.log("user is not logged in ");
        response.err = "true";
        res.send(response);
    }
    else{
        const username = req.body.username;
        let user_id;
        user.findOne({username},(err,user) => {
            console.log(user);
            user_id=user._id;
            console.log(user_id);
            blogs.find({user_id},(err,blog) => {
                console.log("Response has been send successfully");
                console.log(user_id);
                res.send(blog);
                //const data = blog.toObject();
                console.log(blog);
               //console.log(blog.content);
            }).sort({ date_time:'desc'})
            .catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        })
        
    }
}