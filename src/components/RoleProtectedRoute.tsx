// src/components/RoleProtectedRoute.tsx

import React, { ReactNode } from 'react';
import { useAuth } from '../context/AuthContext';
import { hasAccess } from '../utils/roleUtils';

interface Props {
  requiredRoles: string[];
  children: ReactNode;
}

const RoleProtectedRoute: React.FC<Props> = ({ requiredRoles, children }) => {
  const { user } = useAuth();

  if (!user) {
    return <div>Please log in to access this page.</div>;
  }

  const isAuthorized = hasAccess(user.role, requiredRoles);

  if (!isAuthorized) {
    return <div>Access Denied: You do not have permission to view this content.</div>;
  }

  return <>{children}</>;
};

export default RoleProtectedRoute;
