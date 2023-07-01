const Teacher = require('../models/teacher');
const Student = require('../models/student');

const teacherController = {
  registerTeacher: async (req, res) => {
    try {
      const { teacherName, teacherNumber, specialitySubjects, phoneNumber, email,isAdmin } = req.body;

      const newTeacher = new Teacher({
        teacherName,
        teacherNumber,
        specialitySubjects,
        phoneNumber,
        email,
        isAdmin
      });

      await newTeacher.save();

      res.status(200).json({ message: 'Teacher registration successful' });
    } catch (error) {
      console.error('Error registering teacher:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  getTeacherPage: (req, res) => {
    res.send('Teacher page');
  },

  getAllStudents: async (req, res) => {
    try {
      const students = await Student.find();
      const studentDetails = students.map(student => `Student: ${student.name}\nGrade: ${student.grade}\nRemark: ${student.remark}`);
      res.send(studentDetails.join('\n\n'));
    } catch (error) {
      console.error('Error retrieving students:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  updateGradeAndRemark: async (req, res) => {
    const { studentId } = req.params;
    const { grade, remark } = req.body;

    try {
      const student = await Student.findById(studentId);

      if (!student) {
        return res.status(404).send('Student not found');
      }

      student.grade = grade;
      student.remark = remark;

      await student.save();

      res.send('Grade and remark updated successfully');
    } catch (error) {
      console.error('Error updating grade and remark:', error);
      res.status(500).send('Internal Server Error');
    }
  }
};

module.exports = teacherController;
