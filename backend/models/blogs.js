const { json } = require('body-parser');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blog = new Schema({
    content:{
        type:Object
    }
},{ minimize: false });

module.exports = mongoose.model('blogs',blog);
