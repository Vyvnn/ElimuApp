const express = require('express');
const router = express.Router();

const parentController = require('../controllers/parentController');
const studentController = require('../controllers/studentController');
const teacherController = require('../controllers/teacherController');

// Routes for the parent
router.post('/parent/signin', parentController.parentSignIn);
router.get('/parent/details', parentController.getParentDetails);



// Routes for the student
router.post('/signin', studentController.studentSignIn);
router.get('/page', studentController.getStudentPage);
router.post('/grade-remark', studentController.getGradeAndRemark);



// Routes for the teacher

router.post('/register', teacherController.registerTeacher);
router.get('/page', teacherController.getTeacherPage);
router.get('/students', teacherController.getAllStudents);
router.put('/students/:studentId', teacherController.updateGradeAndRemark);

module.exports = router;


