require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require('express-session')
const passport = require('passport')
const connectToDb = require("./config/connectToDb")
const auth_route = require("./routes/auth");
const api_route = require("./routes/api")

const app = express();

const corsOptions = {
  origin: ['http://localhost:5173', 'http://192.168.0.9:5173', "http://192.168.0.9:8080", "http://localhost:8080", "http://localhost:8080/auth", "https://ai-image-generator-backend-wew8.onrender.com", "http://localhost:8080/auth", "https://ai-image-generator-backend-wew8.onrender.com/auth", "https://ai-image-generator-z95d.onrender.com"],
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'HEAD'],
};

app.use(cors(corsOptions));

connectToDb()

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

require("./config/passport") (passport);

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: Date.now() + 1000 * 60 * 60 * 24 * 30}
}))

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", auth_route);
app.use("/api", api_route);

app.listen(process.env.PORT || 8080, console.log(`listening on Port ${process.env.PORT || 8080}`));