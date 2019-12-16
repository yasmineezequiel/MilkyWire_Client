describe('impactor can view listed posts', () => {
  beforeEach (() => {
    cy.server()
  })
  
  it('Successfully', () => {
    cy.route({
      method: 'GET',
      url: 'https://api.example.com/posts',
      response: 'fixture:posts.json'
  })
    cy.visit('http://localhost:3001')
  })
  it("contain posts content", () => {
    cy.get('.list-posts')
    .first().should('have', 'Ocean Cleaning')
    .next().should('have', 'Donate and make your impact')
  }) 

  it('Posts do not load on the landing page', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://api.example.com/posts',
      status: 400,
      response: 'fixture:another_error.json'
      })
    cy.visit('http://localhost:3001')
    cy.get('#error')
        .should('have', 'The post could not be found')
    })
  })
