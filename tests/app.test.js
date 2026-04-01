const request = require('supertest');
const app = require('../src/app');

describe('Tests unitaires API', () => {
  
  test('GET /health ', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Voici les données concernant votre santé');
    expect(res.text).toContain('ok');
  });

  test('GET / ', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Bienvenue dans mon application, je suis Marine CADET.');
  });

  test('GET /api/users ', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});