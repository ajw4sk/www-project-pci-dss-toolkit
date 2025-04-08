import PDFDocument from "pdfkit";
import { Telemetry } from "../../types/telemetry"; // Optional: define interface
import getStream from "get-stream";

export const generatePDFReport = async (telemetryData: Telemetry[]) => {
  const doc = new PDFDocument({ margin: 30, size: "A4" });

  doc.fontSize(20).text("PCI DSS Compliance Report", { align: "center" });
  doc.moveDown();

  telemetryData.forEach((entry, index) => {
    doc
      .fontSize(12)
      .text(`Session ID: ${entry.sessionId || "N/A"}`)
      .text(`Script Source: ${entry.scriptSrc || "N/A"}`)
      .text(`Bot Score: ${entry.botScore ?? "N/A"}`)
      .text(`Justification Tags: ${(entry.justificationTags || []).join(", ")}`)
      .text(`Anomaly Flags: ${(entry.anomalyFlags || []).join(", ")}`)
      .text(`Timestamp: ${new Date(entry.timestamp).toLocaleString()}`);

    doc.moveDown(1.5);

    if (index !== telemetryData.length - 1) {
      doc.moveTo(30, doc.y).lineTo(565, doc.y).stroke();
      doc.moveDown();
    }
  });

  doc.end();

  const pdfBuffer = await getStream.buffer(doc);
  return pdfBuffer;
};
