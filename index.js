const express = require("express")
const hbs = require("hbs")
const session = require('express-session')

require("dotenv").config()

const Router = require("./routes/index")

const app = express()

app.set('trust proxy', 1); // Trust proxy for Railway
app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        httpOnly: true,
        secure: app.get('env') === 'production'
    }
}));

require("./db_connect")
require("./helpers")
app.set("view engine","hbs")
app.use(express.static("./views/static"))
app.use("/public",express.static("public"))
hbs.registerPartials("./views/partials")

app.use("/",Router)

let port = process.env.PORT || 8000

app.listen(port,()=>console.log(`Server is Running at http://localhost:${port}`))