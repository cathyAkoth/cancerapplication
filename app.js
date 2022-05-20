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



const { PORT } = process.env || 4000 
const { WELCOME_MESSAGE, DATABASE_URL } = process.env


const outreachFormRoutes = require("./routes/outreachFormRoute")



const indexnewRoutes = require("./routes/indexnewRoute")
const breastCancerRoutes = require("./routes/breastCancerRoute")

const cervicalCancerRoutes = require("./routes/cervicalCancerRoute")
const throatCancerRoutes = require("./routes/throatCancerRoute")
const prostateCancerRoutes = require("./routes/prostateCancerRoute")
const loginRoutes = require("./routes/loginRoutes")
const signupRoutes = require("./routes/signupRoute")
const hospitalRoutes = require("./routes/hospitalRoutes")
const specialistRegRoutes = require("./routes/specialistRegRoute")



// declare app isntance
const app = express();

// load middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))

app.use(express.static('public'));
app.use('/public/images', express.static(__dirname + '/public/images'));

app.use(express.urlencoded({extended: true}))
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());





app.use('/',outreachFormRoutes);
app.use('/specialist', specialistRegRoutes);

app.use('/outreachForm',outreachFormRoutes);
app.use('/specialist', specialistRegRoutes);
app.use('/', indexnewRoutes);
app.use('/breastcancer', breastCancerRoutes);
app.use('/cervicalcancer', cervicalCancerRoutes);
app.use('/throatcancer', throatCancerRoutes);
app.use('/prostatecancer', prostateCancerRoutes);
app.use('/login', loginRoutes);
app.use('/signup', signupRoutes)
app.use('/hospitalDashboard', hospitalRoutes);




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

app.set('view engine', 'pug');
app.set('views', './views');
