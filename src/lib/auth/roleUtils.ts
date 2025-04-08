// src/utils/roleUtils.ts

export const roles = {
    ADMIN: 'admin',
    MANAGER: 'manager',
    USER: 'user',
  };
  
  export const hasAccess = (userRole: string, allowedRoles: string[]): boolean => {
    return allowedRoles.includes(userRole);
  };
  