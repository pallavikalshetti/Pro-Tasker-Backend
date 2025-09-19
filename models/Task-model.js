const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'task title is required'] 
  },
  description: {
    type: String,
    required: [true, 'Task description is required'] 
  },
  status: {
    type: String,
    enum: ['To Do', 'In Progress', 'Done'],
    default: 'To Do',
  },
  project: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Project', 
    required: true 
  },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);