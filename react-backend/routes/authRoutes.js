const passport = require ('passport');

module.exports = (router) => {
    router.get('/auth/google/', passport.authenticate('google',{
        scope: ['profile', 'email']
    })
    );
    router.get('/auth/google/callback', passport.authenticate('google'),
    (req,res)=>{
        console.log(res,"cameeeeee")
        res.redirect('/surveys')
    }
);
    router.get('/api/current_user', (req, res)=> {
        console.log(req.user,"gtdrtder");
        res.send(req.user);
      });
      router.get('/logout', (req, res)=> {
        console.log(req.user,"gtdrtder");
        req.logout();
        res.send(req.user);
      });
};
