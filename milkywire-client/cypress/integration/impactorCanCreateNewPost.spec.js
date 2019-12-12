describe('Create new post', () => {

  beforeEach(() => {
    cy.server()
    cy.visit('http://localhost:3001')
  })

  it('Successfully', () => {
    cy.route({
      method: 'POST',
      url: 'http://api.example.com',
      response: 'fixture:posts.json'
    })
    cy.get('#create-post-form').within(() => {
      cy.get('#create-title').type('Ocean Cleaning')
        .get('#create-text').type('Donate and make your impact.')
        .get('#submit-create-form').click()
    })
    cy.get('#response-message')
    .should('contain', 'The post was successfully created')
  })

  it('Fails to', () => {
    cy.route({
      method: 'POST',
      url: 'http://api.example.com',
      response: 'fixture:error_message'
  })
    cy.get('#create-post-form').within(() => {
      cy.get('#create-title').type('Ocean Cleaning')
        .get('#submit-create-form').click()
    })
    cy.get('#response-message')
    .should('contain', 'Unable to create post')
  })
})
