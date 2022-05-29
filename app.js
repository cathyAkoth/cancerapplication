const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

//Require express session inorder to monitor authentication.
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});



const cookieParser = require("cookie-parser");
const { adminAuth, userAuth , specialistAuth } = require("./middleware/auth.js");

const { PORT } = process.env || 4000 
const { WELCOME_MESSAGE, DATABASE_URL } = process.env

const outreachFormRoutes = require("./routes/outreachFormRoute")
const specialistRoutes = require ("./routes/specialistRoute")




// declare app isntance
const app = express();

// load middleware
app.use(express.json());
app.use(cookieParser());


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))

app.use(express.static('public'));
app.use('/public/images', express.static(__dirname + '/public/images'));

app.use(express.urlencoded({extended: true}))
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());



app.use("/api/auth", require("./Auth/route"));

app.get("/", (req, res) => res.render('index'));
app.get("/blog", (req, res) => res.render('blogposts'));
app.get("/users", (req, res) => res.render('admin'));
app.get("/breastcancer", (req, res) => res.render('b'));
//app.get("/specialistform", (req, res) => res.render('specialistform'));
app.get("/contact", (req, res) => res.render('contactForm'));
app.get("/cervicalcancer", (req, res) => res.render('cervicalCancer'));
app.get("/patient" , (req, res) => res.render('patientDahboard'));
app.get("/throatcancer", (req, res) => res.render('throatcancer'));
app.get("/hospital", (req, res) => res.render('hospitalDashboard'));
app.get("/specialist", (req, res) => res.render('speclialist'));
app.get("/referral", (req, res) => res.render('referralForm'));
app.use('/outreachform',outreachFormRoutes);
app.use("/specialistReg",specialistRoutes );
app.get("/prostatecancer", (req, res) => res.render('prostateCancer'));
app.get("/register", (req, res) => res.render("register"));
app.get("/login", (req, res) => res.render("login"));
app.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: "1" });
  res.redirect("/");
});
app.get("/admin", adminAuth, (req, res) => res.render("hospitalDashboard"));
app.get("/spec", specialistAuth, (req, res) => res.render("speclialist"));

app.get("/basic", userAuth, (req, res) => res.render("patientDahboard"));





// spin up the server 
mongoose.connect(DATABASE_URL).then(() => {
    // successful connection
    app.listen(PORT, ()=> {
        let message = `${WELCOME_MESSAGE} http://localhost:${PORT}`
        console.log(message)
    })
}).catch(error => {
    console.error("Failed to start the server due to : ",error)
})

app.set('view engine', 'ejs');
//app.set('view engine', 'pug');
app.set('views', './views');
