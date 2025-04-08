# 🤝 Contributing Guide

Welcome to the OWASP PCI DSS Toolkit! This guide will help you get started with development and contributing.

---

## 🛠️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Naman8kumar/www-project-pci-dss-toolkit.git
   cd www-project-pci-dss-toolkit

2. Install Dependencies
   npm install

3. Start Backend
   cd backend
   npm install
   npm run dev

4. Start Frontend (Dashboard)
   cd client-dashboard
   npm install
   npm run dev

5.  Client SDK

    Located in /client-sdk
    Load via:
    <script src="web-security-sdk.js"></script>

    📂 Folder Structure

    .
    ├── backend/                  → Express.js API
    │   ├── routes/telemetry.ts
    │   ├── controllers/telemetry.ts
    │   └── utils/pdfGenerator.ts
    ├── client-dashboard/        → React/Next.js dashboard
    ├── client-sdk/              → Lightweight browser SDK
    ├── docs/                    → Documentation and architecture
    │   └── system-architecture.md
    └── CONTRIBUTING.md          → You are here!

   🧑‍💻 Making a Contribution

   1. Create a Branch
   git checkout -b feat/my-awesome-feature

   2. Make your changes

   3. Commit
      git commit -m "[Feature] Add my awesome feature"

   4. Push
      git push origin feat/my-awesome-feature

   5. Create a Pull Request

     Go to your forked repo on GitHub.
     Click "Compare & Pull Request".

   ✅ Good First Issues
   Check the issues tab for tasks labeled good first issue.
   Thanks for contributing to open source and PCI security! 🛡️


