const blog = require('../models/blogs');

const editor = (req,res,next) => {
    var response = { "err":"false" };
    if(!req.session.user){
        console.log("user is not logged in ");
        response.err = "true";
        res.send(response);
    }
    else{
        const content = req.body;
        const user_id = req.session.user._id;
        const data = {content:content,user_id:user_id}
        blogs = new blog(data);
        blogs.save()
        .then(() => {
            console.log(data);
            console.log("Data saved sucessfully");
            res.send(data);
        })
        .catch(err => {
            console.log(err);
        })
    }
}

module.exports = editor;