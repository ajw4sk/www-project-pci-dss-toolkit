# OWASP PCI DSS Toolkit

A modern developer-first toolkit to streamline PCI DSS v4.0 compliance through automation, secure telemetry, and developer-friendly tooling.

---

## 🔧 Key Modules & Features

| Feature | Description |
|--------|-------------|
| 🧠 **Developer Onboarding Guide** | Comprehensive `CONTRIBUTING.md` and `architecture-guide.md` help new developers understand setup, folder structure, and data flow. [#11](https://github.com/OWASP/www-project-pci-dss-toolkit/pull/11) |
| 📤 **Exportable Compliance Reports** | Generate PCI DSS reports for QSA audits in CSV/PDF formats. [#8](https://github.com/OWASP/www-project-pci-dss-toolkit/pull/8) |
| 🛡️ **Real-Time Bot Detection** | Behavior-based bot detection logic integrated into the SDK. [#6](https://github.com/OWASP/www-project-pci-dss-toolkit/pull/6) |
| 📡 **Secure Telemetry Ingestion** | API for ingesting telemetry using MongoDB and Zod validation. [#4](https://github.com/OWASP/www-project-pci-dss-toolkit/pull/4) |
| 📦 **Script Inventory Collection** | Collect and validate scripts as required for PCI DSS v4.0 compliance. [#2](https://github.com/OWASP/www-project-pci-dss-toolkit/pull/2) |

---

## 🚀 Getting Started

> See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for full setup, folder structure, and PR instructions.

```bash
# Clone the repo
git clone https://github.com/OWASP/www-project-pci-dss-toolkit.git

# Install dependencies
npm install

# Start the development server
npm run dev

📐 System Architecture
View the Architecture Guide for a full breakdown of data flow from SDK → Backend → DB → Dashboard.

📄 License
This project is licensed under the MIT License.

