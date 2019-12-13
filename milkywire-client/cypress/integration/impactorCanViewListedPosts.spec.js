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

  it('contains logo', () => {
    cy.get('h1')
    .should('contain', 'Milkywire')
  })
})