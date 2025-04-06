import { checkCompliance } from '../../src/sdk/complianceChecker';

describe('Compliance Checker', () => {
  it('should return true when all requirements are met', () => {
    const input = {
      firewallEnabled: true,
      passwordPolicy: 'strong',
      dataEncrypted: true,
    };
    const result = checkCompliance(input);
    expect(result).toBe(true);
  });

  it('should return false if any requirement fails', () => {
    const input = {
      firewallEnabled: false,
      passwordPolicy: 'weak',
      dataEncrypted: false,
    };
    const result = checkCompliance(input);
    expect(result).toBe(false);
  });

  it('should handle missing fields gracefully', () => {
    const input = {
      firewallEnabled: true,
    };
    const result = checkCompliance(input);
    expect(result).toBe(false);
  });
});
