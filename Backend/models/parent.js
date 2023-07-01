const mongoose = require('mongoose');

// Parent schema
const parentSchema = new mongoose.Schema({
  name:{type: String, required:true, minlength:3,maxlength:30 },
  email: {type: String,required:true,minlength:3, maxlength:200,unique:true},
  password:{type: String,required:true,minlength:3,maxlength:1024},
  student: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

const Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent;
