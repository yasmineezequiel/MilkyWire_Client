describe('Impactor can view post list', () => {
  beforeEach(() => {
    cy.server()
  })

  it('successfully', () => {
    cy.route({
      method: 'GET',
      url: 'http://api.example.com',
      response: 'fixture:posts.json'
    })
    cy.visit('http://localhost:3001')
  })

  it("contains post content", () => {
    cy.get('h1')
    .first().should('have','Ocean Cleaning')
    .next().should('have','Donate and make your impact.')
})

  it('sees message for no posts', () => {
    cy.route({
      method: 'GET',
      url: 'http://api.example.com',
      response: '{"posts":[]}'
    })
    cy.visit('http://localhost:3001')
    cy.get("#message").should('contain', 'There are no posts')
  })
})