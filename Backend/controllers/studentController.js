const Student = require('../models/student');

exports.getStudentPage = (req, res) => {
  // Render a form for the student to select their name and subject
  res.send('Student page');
};

exports.getGradeAndRemark = async (req, res) => {
  const { studentName, subject } = req.body;

  try {
    // Find the student by name and subject
    const selectedStudent = await Student.findOne({ name: studentName, subject });

    if (!selectedStudent) {
      return res.status(404).send('Student not found');
    }

    // Display student's grade and teacher's remark
    const { grade, remark } = selectedStudent;
    res.send(`Grade: ${grade}\nRemark: ${remark}`);
  } catch (error) {
    console.error('Error retrieving student:', error);
    res.status(500).send('Internal Server Error');
  }
};
