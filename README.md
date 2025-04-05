# 🛡️ PCI DSS Telemetry API (Backend)

Secure backend API that receives telemetry from the client-side JavaScript SDK to support PCI DSS v4.0 compliance.

## 🚀 Features

- `POST /telemetry` endpoint to ingest SDK data
- Secure API key authentication via headers
- Validates payloads using Zod schema
- Stores telemetry data in MongoDB
- Designed for script inventory, anomaly detection, and compliance logging

## 🛠 Tech Stack

- Node.js + Express.js
- MongoDB + Mongoose
- Zod (schema validation)
- dotenv for environment config

## 📦 Setup Instructions

 1. Clone the repo

```bash
git clone https://github.com/Naman8kumar/www-project-pci-dss-toolkit.git
cd www-project-pci-dss-toolkit
npm install

2. Add a .env file

MONGO_URI=mongodb://localhost:27017/telemetry
API_KEY=your-secure-api-key

3. Start the server
npm start
Server will run on: http://localhost:3000

API Endpoint
POST /telemetry
Ingests telemetry data from the frontend SDK.

🔐 Headers
x-api-key: your-secure-api-key
Content-Type: application/json

🧾 Payload Example
{
  "sessionId": "abc123",
  "timestamp": "2025-04-05T12:00:00Z",
  "eventType": "script-load",
  "scriptMetadata": {
    "src": "https://cdn.example.com/script.js",
    "type": "text/javascript",
    "integrity": "sha256-xyz123"
  }
}

🔒 Security
Validates payload with Zod

API key protection

No PII or sensitive data stored

Timestamps and integrity fields for forensic analysis



