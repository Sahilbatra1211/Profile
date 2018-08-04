const router=require('express').Router();

const authCheck=(req,res,next)=>{
    if(!req.user)       //middleware to check if user is not logged in
    {
        //if user is not logged in
        res.redirect('/')
    }
    else{
        next();
    }
}

router.use(authCheck);

router.get('/',(req,res)=>{
    //  res.send("you are logged in,this is your profile-"+req.user.username)
    res.render('profile',{user:req.user});
});
router.get('/redirect',(req,res)=>{
    //  res.send("you are logged in,this is your profile-"+req.user.username)
    req.logout();
    res.redirect('../')
});

module.exports=router;