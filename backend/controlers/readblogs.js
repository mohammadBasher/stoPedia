const blogs = require('../models/blogs');

module.exports = (req,res,next) => {
    console.log(req.session);
    var response = { "err":"false" };
    if(!req.session.user){
        console.log("user is not logged in ");
        response.err = "true";
        res.send(response);
    }
    else{
        const user_id = req.session.user._id;
        blogs.find({user_id},(err,blog) => {
            console.log("Response has been send successfully");
            res.send(blog);
            //const data = blog.toObject();
            console.log(blog);
           //console.log(blog.content);
        }).sort({ date_time:'desc'})
        .catch(err => {
            console.log(err);
        })
    }
}