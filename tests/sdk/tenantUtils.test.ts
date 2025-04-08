import { detectTenantFromRequest, getTenantConfig } from '../../src/multiTenant/multiTenantUtils';

describe('Tenant Utils', () => {
  describe('detectTenantFromRequest', () => {
    it('should detect tenant from host header', () => {
      const req = {
        headers: {
          host: 'acme.localhost:3000',
        },
      } as any;

      const tenant = detectTenantFromRequest(req);
      expect(tenant).toBe('acme');
    });

    it('should return "default" if host is missing', () => {
      const req = {
        headers: {},
      } as any;

      const tenant = detectTenantFromRequest(req);
      expect(tenant).toBe('default');
    });
  });

  describe('getTenantConfig', () => {
    it('should return tenant config for known tenant', () => {
      const config = getTenantConfig('acme');
      expect(config.name).toBe('Acme Corp');
      expect(config.id).toBe('acme');
    });

    it('should return default config for unknown tenant', () => {
      const config = getTenantConfig('unknown');
      expect(config.id).toBe('default');
    });
  });
});
