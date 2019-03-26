const keys = require ('../config/keys.js');
const  stripe = require ('stripe')(keys.stripeSecretKey);
const requireLogin = require ('../middlewares/requireLogin');


module.exports = router => {
    router.post('/api/stripe',requireLoginv, async (req,res)=>{
        console.log(req.body,"anything inside body");
     const charge = await   stripe.charges.create({
            amount: 500,
            currency: "usd",
            source: req.body.id, // obtained with Stripe.js
            description: "$5 for 5 credits"
          });
          console.log('placed charge',charge);
          req.user.credits +=5;
        const user = await req.user.save();
        res.send(user);
    }); 
    
};