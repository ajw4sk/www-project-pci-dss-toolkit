// routes/telemetry.js
const express = require('express');
const router = express.Router();
const { telemetrySchema } = require('../utils/validator');
const Telemetry = require('../models/Telemetry');

router.post('/', async (req, res) => {
  const apiKey = req.headers['x-api-key'];

  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized: Invalid API key' });
  }

  try {
    const validated = telemetrySchema.parse(req.body);
    const saved = await Telemetry.create(validated);
    res.status(201).json({ success: true, id: saved._id });
  } catch (err) {
    console.error('Telemetry Error:', err);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
