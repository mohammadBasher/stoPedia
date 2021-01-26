const { json } = require('body-parser');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blog = new Schema({
    content:{
        type:Object
    },
    user_id:{
        type:mongoose.Schema.ObjectId,
        ref:"user"
    },
    date_time:{
        type: Date,
        default: Date.now
    }
},{ minimize: false });

module.exports = mongoose.model('blogs',blog);
