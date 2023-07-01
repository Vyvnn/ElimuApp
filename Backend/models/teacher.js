const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name:{type: String, required:true, minlength:3,maxlength:30 },
  email: {type: String,required:true,minlength:3, maxlength:200,unique:true},
  password:{type: String,required:true,minlength:3,maxlength:1024},
  subjectsTaught: [String],
  teachersRemark: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  isAdmin:{type:Boolean,default:false}
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
module.exports = mongoose.model('Teacher', teacherSchema);
