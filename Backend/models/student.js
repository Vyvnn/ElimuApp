const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentID: {
    type: Number,
    required: true
  },
 
  password:{type: String,required:true,minlength:3,maxlength:1024},

  subject: {
    type: String,
    required: true
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher'
  },
  grade: {
    type: Number,
    default: null // Set the default value to null
  },
  remark: {
    type: String,
    default: '' // Set the default value to an empty string
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
