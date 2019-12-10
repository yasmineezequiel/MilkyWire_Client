describe('Create new post', () => {

  beforeEach(() => {
    cy.server()
    cy.visit('http://localhost:3001')
  })

  it('Successfully', () => {
    cy.route({
      method: 'POST',
      response: 'fixture:posts.json',
      url: 'http://api.example.com'
    })
    cy.get('#create-post-form').within(() => {
      cy.get('#create-title').type('Ocean Cleaning')
        .get('#create-text').type('Donate and make your impact.')
        .get('#submit-create-form').click()
    })
  })
})