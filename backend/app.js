const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const signup = require('./routes/signup').signup;
const login = require('./routes/login').login;
//const fp = require('./routes/login').fp;
const editor = require('./routes/editor');
const readblogs = require('./routes/readblogs');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://stopedia:snyh2vYLyVEhCCfA@cluster0.e27pj.mongodb.net/stopedia?retryWrites=true&w=majority',{ 
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true 
})
.then(() => {
    console.log("DB connected");
});

const port = "4000";

app.use(signup);
app.use(login);
//app.use(fp);
app.use(editor);
app.use(readblogs);

app.listen(port,()=>{
    console.log("Server is running on "+port);
});
