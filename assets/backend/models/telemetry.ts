import mongoose from 'mongoose';

const scriptSchema = new mongoose.Schema({
  src: String,
  type: String,
  integrity: String,
  domain: String,
});

const telemetrySchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  timestamp: { type: Number, required: true },
  scripts: [scriptSchema],
  botScore: { type: Number, required: true },
  justificationTags: [String],
  anomalyFlags: [String],
});

const Telemetry = mongoose.model('Telemetry', telemetrySchema);
export default Telemetry;
