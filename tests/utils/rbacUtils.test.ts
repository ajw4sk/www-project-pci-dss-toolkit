import { isAuthorized } from '../../src/utils/roleUtils';

describe('RBAC Utils - isAuthorized', () => {
  const permissions = {
    admin: ['viewDashboard', 'manageUsers', 'editSettings'],
    auditor: ['viewDashboard'],
    user: ['viewDashboard'],
  };

  it('should return true for valid permission for admin', () => {
    const result = isAuthorized('admin', 'manageUsers', permissions);
    expect(result).toBe(true);
  });

  it('should return false for invalid permission for user', () => {
    const result = isAuthorized('user', 'manageUsers', permissions);
    expect(result).toBe(false);
  });

  it('should return true for valid permission for auditor', () => {
    const result = isAuthorized('auditor', 'viewDashboard', permissions);
    expect(result).toBe(true);
  });

  it('should return false if role is not found', () => {
    const result = isAuthorized('unknown', 'viewDashboard', permissions);
    expect(result).toBe(false);
  });

  it('should return false if permission is not found in role array', () => {
    const result = isAuthorized('admin', 'nonExistingPermission', permissions);
    expect(result).toBe(false);
  });
});
