// utils/validator.js
const { z } = require('zod');

const telemetrySchema = z.object({
  sessionId: z.string(),
  timestamp: z.coerce.date(),
  eventType: z.string(),
  scriptMetadata: z.object({
    src: z.string().url().optional(),
    type: z.string().optional(),
    integrity: z.string().optional(),
  }).optional()
});

module.exports = { telemetrySchema };
