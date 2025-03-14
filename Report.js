// backend/models/Report.js
const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['annual', 'quarterly', 'monthly'],
    required: true,
  },
  data: {
    type: mongoose.Schema.Types.Mixed, // Can store any JSON object/array
    required: true,
  },
  generatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Report', ReportSchema);
