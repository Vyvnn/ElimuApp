const Student = require('../models/student');



exports.getTeacherPage = (req, res) => {
  // Render a form for the teacher to select their name
  res.send('Teacher page');
};

exports.getAllStudents = async (req, res) => {
  try {
    // Display all students with their names, grades, and remarks
    const students = await Student.find();
    const studentDetails = students.map(student => `Student: ${student.name}\nGrade: ${student.grade}\nRemark: ${student.remark}`);
    res.send(studentDetails.join('\n\n'));
  } catch (error) {
    console.error('Error retrieving students:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.updateGradeAndRemark = async (req, res) => {
  const { studentId } = req.params;
  const { grade, remark } = req.body;

  try {
    // Update the grade and remark of the specified student
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
};
