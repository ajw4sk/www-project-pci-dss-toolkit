// models/Telemetry.js
const mongoose = require('mongoose');

const telemetrySchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  timestamp: { type: Date, required: true },
  eventType: { type: String, required: true },
  scriptMetadata: { type: Object }, // src, type, integrity, etc.
}, { timestamps: true });

module.exports = mongoose.model('Telemetry', telemetrySchema);
