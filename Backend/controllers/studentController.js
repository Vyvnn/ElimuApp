const Student = require('../models/student');
const Teacher = require('../models/teacher');

exports.getGradeAndRemark = async (req, res) => {
  const { studentName, subject } = req.body;

  try {
    // Find the student by name and subject
    const selectedStudent = await Student.findOne({ name: studentName, subject });

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
};
