const express = require('express');
const mainpageRoutes = require('./routes/mainpage');
const mongoose = require('mongoose');
const parent = require('./models/parent');
const student = require('./models/student');
const teacher = require('./models/teacher');

const connectDB = () => {
  mongoose.connect('mongodb+srv://vivyan3:burpee6@elimu.lhrbpeb.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
};

const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/mainpage', mainpageRoutes);

// Start server
app.listen(5005, () => {
  console.log('Listening on port 5005');
});
