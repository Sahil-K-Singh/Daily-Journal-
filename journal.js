const mongoose=require('mongoose');
 const jounralschema=mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
  }, // reference to User
  date:{
    type:Date,
    required:true,
  }, 
  content:{
    type:String,
    required:true,
  },
  mood:{
    type:String,
  }, // optional
 },{timestamps:true});

 const Journal=mongoose.model("Journal",jounralschema);
 module.exports=Journal;