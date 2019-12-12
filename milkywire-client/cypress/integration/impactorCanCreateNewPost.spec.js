describe('Creates a post', () => {

  it('Successfully', () => {
    cy.server()
    cy.route({
      method: 'POST',
      url: 'https://api.example.com/post',
      response: '{"post":[]}'
    })
    
  cy.visit('http://localhost:3001')
    cy.get('#create-post-form').within(() => {
      cy.get('[name="title"]').type('Ocean Cleaning')
        .get('[name="text"]').type('Donate and make your impact')
      cy.get('[name="submit"]').click()
    })
    cy.get('#response-message')
      .should('contain', 'The post was successfully created.')
  })
  
  it('Fails to', () => {
    cy.route({
      method: 'POST',
      url: 'https://api.example.com/post',
      response: '{"post":[]}'
    })
    cy.visit('http://localhost:3001')
    cy.get('#create-post-form').within(() => {
      cy.get('[name="title"]')
        .get('[name="submit"]').click()
    })
    cy.get('#response-message')
      .should('contain', 'Unable to create post')
  })
})