// src/multiTenant/multiTenantUtils.ts

export const getTenantFromDomain = (hostname: string): string => {
    const parts = hostname.split('.');
    const tenant = parts.length > 2 ? parts[0] : 'default';
    return tenant;
  };
  