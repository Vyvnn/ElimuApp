const Parent = require('../models/parent');
const Student = require('../models/student');

const parentController = {
  parentSignIn: async (req, res) => {
    const { parentName, phoneNumber, email, studentId } = req.body;

    try {
      // Find the associated student by ID
      const student = await Student.findById(studentId);

      if (!student) {
        return res.status(404).send('Student not found');
      }

      // Create a new parent document
      const newParent = new Parent({
        parentName,
        phoneNumber,
        email,
        student: student._id // Associate the parent with the student using their ID
      });

      // Save the parent document
      await newParent.save();

      res.send('Parent registration successful');
    } catch (error) {
      console.error('Error registering parent:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  getParentDetails: async (req, res) => {
    const { parentName, studentId } = req.body;

    try {
      // Find the parent associated with the specified student ID
      const parent = await Parent.findOne({ parentName, student: studentId });

      if (!parent) {
        return res.status(404).send('Parent not found');
      }

      // Display parent details: name, phone number, email
      const { parentName, phoneNumber, email } = parent;
      res.send(`Parent: ${parentName}\nPhone Number: ${phoneNumber}\nEmail: ${email}`);
    } catch (error) {
      console.error('Error retrieving parent details:', error);
      res.status(500).send('Internal Server Error');
    }
  }
};

module.exports = parentController;
