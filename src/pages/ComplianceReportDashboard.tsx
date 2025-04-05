import React, { useState } from "react";
import { saveAs } from "file-saver";

const ComplianceReportDashboard = () => {
  const [telemetryData] = useState([
    { sessionId: "1234", botScore: 0.9, timestamp: "2025-04-05T14:23:00Z" },
    { sessionId: "5678", botScore: 0.1, timestamp: "2025-04-05T14:24:30Z" },
  ]);

  const [scriptInventory] = useState([
    { src: "https://cdn.trusted.com/lib.js", integrity: "sha256-abc123", domain: "cdn.trusted.com" },
    { src: "https://unknown.com/script.js", integrity: "sha256-def456", domain: "unknown.com" },
  ]);

  const exportCSV = () => {
    let csv = "Session ID,Bot Score,Timestamp\n";
    telemetryData.forEach(row => {
      csv += `${row.sessionId},${row.botScore},${row.timestamp}\n`;
    });

    csv += "\nScript Inventory:\nSrc,Integrity,Domain\n";
    scriptInventory.forEach(script => {
      csv += `${script.src},${script.integrity},${script.domain}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `pci-dss-compliance-report-${new Date().toISOString()}.csv`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">PCI DSS Compliance Dashboard</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Telemetry Overview</h2>
        <table className="w-full mt-2 border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Session ID</th>
              <th className="p-2 border">Bot Score</th>
              <th className="p-2 border">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {telemetryData.map((data, index) => (
              <tr key={index}>
                <td className="p-2 border">{data.sessionId}</td>
                <td className="p-2 border">{data.botScore}</td>
                <td className="p-2 border">{data.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Third-Party Script Inventory</h2>
        <table className="w-full mt-2 border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Src</th>
              <th className="p-2 border
