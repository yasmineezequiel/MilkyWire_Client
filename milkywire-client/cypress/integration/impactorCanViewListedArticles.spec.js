describe('impactor can view listed posts', () => {
it('sees posts displayed', () => {
  cy.server()
  cy.route({
    method: 'GET',
    url: 'https://api.example.com/posts',
    response: 'fixture:posts.json'
})
  cy.visit('http://localhost:3001')
  cy.get('h1').should('contain', 'Milkywire')
  cy.get('h2')
    .should('contain', 'Ocean Cleaning')
    .should('contain', 'Milkywire')
  cy.contains('Donate and make your impact')
  cy.contains('Impactor report')
  })
})