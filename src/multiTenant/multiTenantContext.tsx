// src/multiTenant/multiTenantContext.tsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getTenantFromDomain } from './multiTenantUtils';

interface TenantContextType {
  tenant: string;
  setTenant: (tenant: string) => void;
}

const TenantContext = createContext<TenantContextType | undefined>(undefined);

export const TenantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tenant, setTenant] = useState('default');

  useEffect(() => {
    const currentTenant = getTenantFromDomain(window.location.hostname);
    setTenant(currentTenant);
  }, []);

  return (
    <TenantContext.Provider value={{ tenant, setTenant }}>
      {children}
    </TenantContext.Provider>
  );
};

export const useTenant = (): TenantContextType => {
  const context = useContext(TenantContext);
  if (!context) throw new Error('useTenant must be used within TenantProvider');
  return context;
};
