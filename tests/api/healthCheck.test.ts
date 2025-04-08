import request from 'supertest';
import handler from '../../src/pages/api/health';
import { createMocks } from 'node-mocks-http';

describe('Health Check API', () => {
  it('should return 200 with status ok', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(data).toEqual({ status: 'ok' });
  });

  it('should handle non-GET methods with 405', async () => {
    const { req, res } = createMocks({
      method: 'POST',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
    const data = JSON.parse(res._getData());
    expect(data).toEqual({ error: 'Method Not Allowed' });
  });
});
