const Student = require('../models/student');
const Teacher = require('../models/teacher');

const studentController = {
  getStudentPage: (req, res) => {
    // Handle the logic for getting the student page
    res.send('Student Page');
  },

  studentSignIn: async (req, res) => {
    const { studentId, password } = req.body;

    try {
      // Find the student by student ID and password
      const student = await Student.findOne({ studentId, password });

      if (!student) {
        return res.status(404).send('Invalid student ID or password');
      }

      // Perform any necessary actions for successful sign-in
      // ...

      res.send('Student sign-in successful');
    } catch (error) {
      console.error('Error signing in student:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  getGradeAndRemark: async (req, res) => {
    const { studentName, studentId, subject } = req.body;

    try {
      // Find the student by student ID and subject
      const selectedStudent = await Student.findOne({ name: studentName, studentId, subject });

      if (!selectedStudent) {
        return res.status(404).send('Student not found');
      }

      // Retrieve the teacher's remark and grade
      const teacher = await Teacher.findById(selectedStudent.teacher).populate('teachersRemark');

      if (!teacher) {
        return res.status(404).send('Teacher not found');
      }

      const teacherRemark = teacher.teachersRemark.find(remark => remark._id.equals(selectedStudent._id));

      // Return the student's grade and teacher's remark
      res.send(`Grade: ${selectedStudent.grade}\nRemark: ${teacherRemark.remark}`);
    } catch (error) {
      console.error('Error retrieving student:', error);
      res.status(500).send('Internal Server Error');
    }
  }
};

module.exports = studentController;
