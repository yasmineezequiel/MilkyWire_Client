describe('Impactor can view post list', () => {
  beforeEach(() => {
    cy.server()
  })
  
  it('successfully', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3001',
      response: 'fixture:posts.json'
    })
    cy.visit('http://localhost:3001')
  })
  
  it("contains post input", () => {
    cy.get('#list h1')
    .first().should('have.content', 'Ocean Cleaning')
    .next().should('have.content', 'Donate and make your impact')
  })
    
  it('sees message for no post', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3001',
      response: '{"posts":[]}'
    })
    cy.visit('http://localhost:3001')
    cy.get("#message").should('contain', 'There are no posts')
    })
  })