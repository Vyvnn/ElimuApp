const express = require('express');
const router = express.Router();

const ParentController = require('../controllers/parentController');
const StudentController = require('../controllers/studentController');
const TeacherController = require('../controllers/teacherController');

// Routes for the parent
router.get('/parent', ParentController.getParentPage);
router.get('/parent', (req,res)=>{
    res.send("Welcome to your sign up page")})
router.post('/parent', ParentController.getStudentDetails);

// Routes for the student
router.get('/student', StudentController.getStudentPage);
router.post('/student', StudentController.getGradeAndRemark);

// Routes for the teacher
router.get('/teacher', TeacherController.getTeacherPage);
router.get('/teacher/students', TeacherController.getAllStudents);
router.put('/teacher/students/:studentId', TeacherController.updateGradeAndRemark);

module.exports = router;
