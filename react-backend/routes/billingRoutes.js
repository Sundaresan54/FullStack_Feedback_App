const keys = require ('../config/keys.js');
const  stripe = require ('stripe')(keys.stripeSecretKey);


module.exports = router => {
    router.post('/api/stripe', (req,res)=>{
        console.log(req.body,"anything inside body");
    }); 
    
};