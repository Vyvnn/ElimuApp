const mongoose = require('mongoose');

// Parent schema
const parentSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  student: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

const Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent;
