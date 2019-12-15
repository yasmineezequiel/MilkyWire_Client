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
    cy.get('#list-posts')
    .first().should('have', 'Ocean Cleaning')
    .next().should('have', 'Donate and make your impact')
  })
    
  it('contain logo', () => {
  cy.get('h1')
  .should('contain', 'Milkywire')
  })
})