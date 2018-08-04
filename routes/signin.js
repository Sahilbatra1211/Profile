const router=require('express').Router();
const localmodel=require('../models/local-model');
const LocalStratergy = require('passport-local');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport=require('passport');
const model=require('../models/local-model')


passport.use(new LocalStratergy(async function (username, password, done) {
    var thisUser = await model.user.findAll({where : {username : username}})
    if(!thisUser) return done(null, false);
    console.log(thisUser + "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

    if(thisUser[0].dataValues.password !== password){
        return done(null, false);
    }

    return done(null, thisUser[0])
}))

router.use(cookieParser());
router.use(bodyParser());
router.use(session({
    secret: "cat",
    resave: false,
    saveUninitialized: false
}));
router.use(passport.initialize());
router.use(passport.session());



passport.serializeUser(function (user, done) {
    done(null, user.dataValues.id )
})

passport.deserializeUser(async function (id, done) {
    var thisUser = await model.user.findAll({where: {id: id}})
    done(null, thisUser[0]);
})


router.post("/", passport.authenticate('local', {
    successRedirect: "/user",
    failureRedirect: "/signin"
}))

router.get("/signin",(req,res)=>{
    res.send('ho gya')
})

router.get('/user',(req,res)=>{
    res.send('fail')
})

module.exports=router;