import express from "express";
import {
  getTelemetryData,
  exportTelemetryCSV,
  exportTelemetryPDF,
} from "../controllers/telemetry";

const router = express.Router();

router.get("/", getTelemetryData); // GET /api/telemetry
router.get("/export/csv", exportTelemetryCSV); // GET /api/telemetry/export/csv
router.get("/export/pdf", exportTelemetryPDF); // GET /api/telemetry/export/pdf

export default router;
