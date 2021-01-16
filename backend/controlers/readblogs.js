const blogs = require('../models/blogs');

module.exports = (req,res,next) => {
    blogs.findById("5ffebbad39aca3cf58e00f45")
    .then( blog => {
        console.log("Response has been send successfully");
        res.send(blog);
        //const data = blog.toObject();
        //console.log(blog._id);
        //console.log(blog.content);
    })
    .catch(err => {
        console.log(err);
    })
}