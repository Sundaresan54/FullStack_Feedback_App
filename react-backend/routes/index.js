var express = require('express');
var router = express.Router();
require('../models/User');
require('../models/Survey');
require('../services/passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./authRoutes');
const billingRoutes = require('./billingRoutes');
const surveyRoutes = require('./surveyRoutes');
const keys = require('../config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

router.use(bodyParser.json());
router.use(cookieSession({
  maxAge:30*24*60*60*1000,
  keys:[keys.cookieKey]
})
);
router.use(passport.initialize());
router.use(passport.session());
billingRoutes(router)
authRoutes(router);
surveyRoutes(router);

//production side 
if(process.env.NODE_ENV==='production'){
  //express will serve up production assets
  //like main.js file or main.css file
  app.use(express.static('build'));

  //express will serve up index.html file
  // if it is not recognize route
  const path = require ('path');
  router.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build','index.html'));
  }) 
}
mongoose.connect(keys.mongoURI).then (
  ()=>{
    console.log("connected to mongoDB")},
 (err)=>{
     console.log("err",err);
  }
)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;