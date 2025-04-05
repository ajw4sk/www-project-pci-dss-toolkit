// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./utils/db');
const telemetryRoute = require('./routes/telemetry');

const app = express();
app.use(cors());
app.use(express.json());

// DB connection
connectDB();

// Routes
app.use('/telemetry', telemetryRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Telemetry API running on http://localhost:${PORT}`);
});
