export async function fetchComplianceStatus() {
    return {
      status: 'Partially Compliant',
      updatedAt: new Date().toISOString(),
      violations: 3,
      riskLevel: 'Medium'
    };
  }
  