const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

          name: { type: String, required: true },

          age: { type: Number, required: true },

          grade: { type: String, required: true },

          dob: {type: Number, required: true},

          rollno: {type: Number, required: true},

          height: {type: Number, required: true },

          weight: {type: Number, required: true },

          bloodgroup: {type: String, required: true }
});

const Student = mongoose.model('Student', studentSchema);

 module.exports = Student;