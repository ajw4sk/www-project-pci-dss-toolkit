import { calculateRiskScore } from '../../src/sdk/riskScoreCalculator';

describe('Risk Score Calculator', () => {
  it('should return a high risk score for critical violations', () => {
    const violations = [
      { severity: 'critical', count: 3 },
      { severity: 'high', count: 1 },
    ];
    const result = calculateRiskScore(violations);
    expect(result).toBeGreaterThanOrEqual(80);
  });

  it('should return a medium score for moderate violations', () => {
    const violations = [
      { severity: 'medium', count: 3 },
    ];
    const result = calculateRiskScore(violations);
    expect(result).toBeGreaterThanOrEqual(40);
    expect(result).toBeLessThan(80);
  });

  it('should return a low score for minor issues', () => {
    const violations = [
      { severity: 'low', count: 2 },
    ];
    const result = calculateRiskScore(violations);
    expect(result).toBeLessThan(40);
  });

  it('should return 0 if no violations exist', () => {
    const result = calculateRiskScore([]);
    expect(result).toBe(0);
  });
});
