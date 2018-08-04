const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    username:String,
    googleId:String
});

const datasaved=new Schema({
    value1:String,
    value2:String,
    value3:String,
    value4:String,
    value5:String,
    value6:String,
    value7:String,
    value8:String,
    value9:String,
    value10:String,

})



const User=mongoose.model("user",userSchema);
const Data=mongoose.model("Data",datasaved);


module.exports={
    User,
    Data
};
