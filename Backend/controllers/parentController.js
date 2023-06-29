const Student = require('../models/student');

exports.getParentPage = (req, res) => {
    // Render a form for the parent to select their name and student
    res.send('parent');
};

exports.getStudentDetails = async (req, res) => {
    const { parentName, studentId } = req.body;

    try {
        // Find the selected student by ID
        const selectedStudent = await Student.findById(studentId);

        if (!selectedStudent) {
            return res.status(404).send('Student not found');
        }

        // Display student details: name, grade, subject, and teacher's remark
        const { name, grade, subject, remark } = selectedStudent;
        res.send(`Student: ${name}\nGrade: ${grade}\nSubject: ${subject}\nRemark: ${remark}`);
    } catch (error) {
        console.error('Error retrieving student:', error);
        res.status(500).send('Internal Server Error');
    }
};
