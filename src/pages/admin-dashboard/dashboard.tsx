import React, { useEffect, useState } from 'react';
import AdminDashboard from '../../components/AdminDashboard';
import { fetchComplianceStatus } from '../../lib/fetchComplianceStatus';

const ComplianceDashboardPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchComplianceStatus().then(setData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <AdminDashboard />
      {data && (
        <div className="mt-6 bg-white p-4 rounded shadow text-sm">
          <h2 className="text-lg font-semibold mb-2">Fetched Compliance Status</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ComplianceDashboardPage;
