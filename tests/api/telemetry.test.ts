import { createMocks } from 'node-mocks-http';
import handler from '../../src/pages/api/telemetry';

describe('Telemetry API', () => {
  it('should return 200 and acknowledge data on valid POST', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        event: 'violation_logged',
        severity: 'high',
        timestamp: new Date().toISOString(),
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(data).toEqual({ success: true });
  });

  it('should return 400 on missing body fields', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        event: 'violation_logged',
        // Missing severity
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const data = JSON.parse(res._getData());
    expect(data).toEqual({ error: 'Invalid payload' });
  });

  it('should return 405 for unsupported methods', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
    const data = JSON.parse(res._getData());
    expect(data).toEqual({ error: 'Method Not Allowed' });
  });
});
