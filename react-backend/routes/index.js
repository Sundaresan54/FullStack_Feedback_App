var express = require('express');
var router = express.Router();
require('../models/User');
require('../services/passport');
const mongoose = require('mongoose');
const authRoutes = require('./authRoutes');
const keys = require('../config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
router.use(cookieSession({
  maxAge:30*24*60*60*1000,
  keys:[keys.cookieKey]
})
);
router.use(passport.initialize());
router.use(passport.session());

authRoutes(router);
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