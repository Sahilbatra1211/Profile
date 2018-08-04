const router=require('express').Router();
const model = require("../models/local-model");

router.get('/',(req,res)=>{
    res.render('signup');
})
router.post("/signup", async (req,res)=>{
   await model.user.create({
        username: req.body.username,
        password: req.body.password
    })

    model.db.sync();

    res.redirect("../../");




})

module.exports=router;