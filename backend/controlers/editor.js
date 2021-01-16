const blog = require('../models/blogs');

const editor = (req,res,next) => {
    const data = req.body;
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

module.exports = editor;