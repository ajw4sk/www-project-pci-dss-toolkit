import { Request, Response } from "express";
import TelemetryModel from "../models/telemetry.model";
import { generatePDFReport } from "../utils/pdfGenerator";
import { Parser as Json2CsvParser } from "json2csv";
import fs from "fs";
import path from "path";

export const getTelemetryData = async (req: Request, res: Response) => {
  try {
    const data = await TelemetryModel.find().sort({ timestamp: -1 });
    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching telemetry:", err);
    res.status(500).json({ message: "Error fetching telemetry" });
  }
};

export const exportTelemetryCSV = async (req: Request, res: Response) => {
  try {
    const data = await TelemetryModel.find().sort({ timestamp: -1 });

    const fields = [
      "sessionId",
      "scriptSrc",
      "scriptType",
      "integrity",
      "externalDomains",
      "botScore",
      "justificationTags",
      "anomalyFlags",
      "timestamp",
    ];
    const json2csv = new Json2CsvParser({ fields });
    const csv = json2csv.parse(data);

    const fileName = "telemetry-report.csv";
    const filePath = path.join(__dirname, "..", "exports", fileName);
    fs.writeFileSync(filePath, csv);

    res.download(filePath, fileName, (err) => {
      if (err) {
        console.error("CSV Download error:", err);
      }
      fs.unlinkSync(filePath);
    });
  } catch (err) {
    console.error("CSV export error:", err);
    res.status(500).json({ message: "Error exporting CSV" });
  }
};

export const exportTelemetryPDF = async (req: Request, res: Response) => {
  try {
    const data = await TelemetryModel.find().sort({ timestamp: -1 });
    const pdfBuffer = await generatePDFReport(data);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=telemetry-report.pdf");
    res.send(pdfBuffer);
  } catch (err) {
    console.error("PDF export error:", err);
    res.status(500).json({ message: "Error exporting PDF" });
  }
};
