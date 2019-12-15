describe('View single post', () => {
  beforeEach (() => {
    cy.server()
  })


  it('Successfully', () => {
    cy.server
      cy.route({
      method: 'GET',
      url: 'https://api.example.com/posts',
      response: 'fixture:post.json',
      status: 200
    })
    cy.get('#post-1')
      .click({ force: true })
    cy.get('[name="single-post"]').within(() => {
      cy.get('.header').should('contain', 'Ocean Cleaning')
        .get('[name="post-text"]').should('contain', 'Donate and make your impact')
    })
  })

  it('Fails to', () => {
    cy.server
      cy.route({
      method: 'GET',
      url: 'https://api.example.com/posts',
      response: 'fixture:another_error.json',
      status: 404
    })

    cy.get('#post-1')
      .click({ force: true })
    cy.get('#response-message')
      .should('contain', 'The recipe could not be found')
  })
})