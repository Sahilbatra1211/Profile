const router=require('express').Router();
const {Data}=require('../models/user-model');

router.get('/',(req,res)=>{
    console.log('finally entered');

    Data.findOne()

    res.render('final',)
})



module.exports=router;