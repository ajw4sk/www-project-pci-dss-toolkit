// src/components/TenantSwitcher.tsx

import React from 'react';
import { useTenant } from '../multiTenant/multiTenantContext';

const tenants = ['acmeCorp', 'cyberNet', 'default'];

const TenantSwitcher: React.FC = () => {
  const { tenant, setTenant } = useTenant();

  return (
    <div className="p-4">
      <label htmlFor="tenant-select" className="block text-sm font-medium text-gray-700">
        Current Tenant:
      </label>
      <select
        id="tenant-select"
        value={tenant}
        onChange={(e) => setTenant(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
      >
        {tenants.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TenantSwitcher;
