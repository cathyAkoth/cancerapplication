const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const nodemailer = require("nodemailer")

const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');

const flash = require('connect-flash');

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
const routes = require("./routes/recipeRoutes")
const responseRoutes = require("./routes/responseRoute")
const homeRoutes = require("./routes/home")
const indexnewRoutes = require("./routes/indexnewRoute")

// declare app isntance
const app = express();

// load middleware
app.use(express.json());
app.use(cookieParser());


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))
app.use(flash());
app.use(fileUpload());
app.use(express.static('public'));
app.use('/public/images', express.static(__dirname + '/public/images'));

app.use(express.urlencoded({extended: true}))
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());


app.use('/' , homeRoutes)
app.use('/response', responseRoutes)

app.use("/api/auth", require("./Auth/route"));
app.use('/', routes);
app.get("/", (req, res) => res.render('index1'));

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
app.get("/register", (req, res) => res.render('registerlayout'));
app.use('/outreachform',outreachFormRoutes);
app.use("/response", responseRoutes)
app.use("/specialistReg",specialistRoutes );
app.get("/prostatecancer", (req, res) => res.render('prostateCancer'));
// app.get("/register", (req, res) => res.render("newregister"));
app.get("/login", (req, res) => res.render("index1"));
app.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: "1" });
  res.redirect("/");
});
app.get("/admin", adminAuth, (req, res) => res.render("hospitalDashboard"));
app.get("/spec", specialistAuth, (req, res) => res.render("newspecialistlist"));

app.get("/basic", userAuth, (req, res) => res.render("patientDahboard"));

//Routing
app.get("/email", function(req, res){
  res.render('email');
})

app.post("/send_email", function(req, response){
  var from = req.body.from
  var to = req.body.to
  var subject = req.body.subject
  var message = req.body.message
  

  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'theo.projects123@gmail.com',
          pass: 'nfkvkfceucescqzd'
      }
  })

  var mailOptions = {
      from:from,
      to:to,
      subject:subject,
      text:message,
      
  }

  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
          console.log(error)
      } else {
          console.log("Email Sent: " + info.response)
      }
      response.redirect("/email")
  })
})



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
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
//app.set('view engine', 'pug');
app.set('views', './views');
