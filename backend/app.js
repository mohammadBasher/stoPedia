const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const mongoDBss = require('connect-mongodb-session')(session);

const signup = require('./routes/signup').signup;
const login = require('./routes/login').login;
const logout = require('./routes/logout').logout;
const isAuth = require('./routes/isAuth');
const search = require('./routes/search/searchBlogs');
//const fp = require('./routes/login').fp;
const editor = require('./routes/editor');
const readblogs = require('./routes/readblogs');
const getNames = require('./routes/search/searchNames');

const app = express();
const ss = new mongoDBss({
  uri:"mongodb://localhost:27017/stopedia",
  collection:"sessions"
});

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(bodyParser.json());
app.use(
    session({
      secret: "iy98hcbh489n38984y4h498",
      resave: false,
      saveUninitialized: false,
      store: ss,
      cookie:{
        maxAge: 1000*60*60*24*3
      }
    })
  );

mongoose.connect('mongodb://localhost:27017/stopedia',{ 
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true 
})
.then(() => {
    console.log("DB connected");
});

const port = "4000";

app.use(isAuth);
app.use(signup);
app.use(login);
//app.use(fp);
app.use(search);
app.use(editor);
app.use(readblogs);
app.use(logout);
app.use(getNames);

app.listen(port,()=>{
    console.log("Server is running on "+port);
});
