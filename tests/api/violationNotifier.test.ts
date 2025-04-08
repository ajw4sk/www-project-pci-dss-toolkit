import { createMocks } from 'node-mocks-http';
import handler from '../../src/pages/api/trigger-violation-alert';

describe('Violation Notifier API', () => {
  it('should return 200 and send alert successfully', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        violationType: 'unauthorized_access',
        affectedService: 'Payment API',
        tenantId: 'tenant_abc',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const responseData = JSON.parse(res._getData());
    expect(responseData).toEqual({ success: true, message: 'Alert sent' });
  });

  it('should return 400 if required fields are missing', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        violationType: 'unauthorized_access',
        // Missing affectedService
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const data = JSON.parse(res._getData());
    expect(data).toEqual({ error: 'Missing violation data' });
  });

  it('should return 405 if method is not POST', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(JSON.parse(res._getData())).toEqual({ error: 'Method Not Allowed' });
  });
});
