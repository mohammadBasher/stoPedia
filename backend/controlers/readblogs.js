const blogs = require('../models/blogs');

module.exports = (req,res,next) => {
    blogs.find()
    .then( blog => {
        console.log("Response has been send successfully");
        res.send(blog);
        //const data = blog.toObject();
        console.log(blog);
        //console.log(blog.content);
    })
    .catch(err => {
        console.log(err);
    })
}