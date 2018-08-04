const express=require('express');
const app=express();
const authroutes=require('./routes/auth');
const GoogleStrategy=require('./config/passport-setup')
const mongoose=require('mongoose');
const keys=require('./config/keys')
const cookieSession=require('cookie-session');
const passport=require('passport');
const profileroutes=require('./routes/profile');
const finalroute=require('./routes/final');
//const signuproutes=require('./routes/signup');
//const model=require('./models/local-model');
//const signinroutes=require('./routes/signin');

//set up view engine
app.set('view engine','ejs');


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/static", express.static(__dirname + "/public"));


mongoose.connect(keys.mongodb.dbURI,()=>{
    console.log('connected to mongodb')


})
app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[keys.session.cookiesKey]
}))
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth',authroutes);
app.use('/profile',profileroutes);
app.use('/final',finalroute);
//app.use('/signup',signuproutes);
//app.use('/signin',signinroutes)

app.get('/',(req,res)=>{
    res.render('home');
})





//model.db.sync().then(()=>{
    app.listen(3000, ()=>{
        console.log("server started at 3000");
    })
//}).catch(()=>{
   // console.log('error')
//});