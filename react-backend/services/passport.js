const passport = require ('passport');
const googleStrategy = require ('passport-google-oauth20').Strategy;
const mongoose =require('mongoose');
const keys = require ('../config/keys');
const User = mongoose.model('users');


//Getting UserID from google
passport.serializeUser((user, done)=>{
    console.log(user.id,"serialzed");
    done(null,user.id);
});

//converting userID into User
passport.deserializeUser((id, done)=>{
    console.log(id,"deserialzed");
    User.findById(id).then( user =>{
        console.log(user,"deserialzed");
    done(null,user);
    }).catch(err=>console.log(err,"in deserial"));
});
passport.use(new googleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
}, async(accessToken,refreshToken, profile, done)=> {
    console.log(profile.id, " google uniqueId ");
    User.findOne({
        googleId:profile.id
    }).then(existingUser =>{
        if(existingUser){
            //Existing User
            console.log("already present")
            done(null,existingUser);
        }
        else{
            //new User
            new User ({
                googleId:profile.id
            }).save()
            .then( user =>{
                done(null,user)
            });
        }
    })
    
}
)
);