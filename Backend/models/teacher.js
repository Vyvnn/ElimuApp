const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: String, required: true,
  email: String, required: true,
  password: String, required: true,
  subjectsTaught: [String], required: true,
  teachersRemark: [String], required: true
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
