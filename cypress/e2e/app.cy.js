describe('Tests E2E', () => {
  it('GET /health - app disponible', () => {
    cy.request('/health').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq('ok');
    });
  });

  it('GET /api/users - retourne des utilisateurs', () => {
    cy.request('/api/users').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
    });
  });
});