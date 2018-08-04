const router=require('express').Router();
const passport=require('passport');
const {Data}=require('../models/user-model');


router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));
//callback route for google to redirect to

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    //res.send(req.user)
    res.redirect('/profile/')

});
router.post('/',(req,res)=>{
    new Data({
        value1:req.body.value1,
        value2:req.body.value2,
        value3:req.body.value3,
        value4:req.body.value4,
        value5:req.body.value5,
        value6:req.body.value6,
        value7:req.body.value7,
        value8:req.body.value8,
        value9:req.body.value9,
        value10:req.body.value10,
    }).save().then((newuser)=>{
        console.log("data saved"+newuser)
        res.render('final')

    })


})


module.exports=router;
