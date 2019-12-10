describe('Impactor can edit post', () => {
    
  beforeEach(() => {
    cy.server()
    cy.visit('http://localhost:3001')
  })
  
  it('Successfully', () => {
    cy.route({
      method: 'PUT',
      url: 'http://api.example.com',
      response: 'fixture:single_post.json'
    })
    cy.get('#create-post-form').click({ force: true })
      cy.get("#edit-post").click()
        cy.get('#edit-post-form').within(() => {
        cy.get("title").type('Extensive research')
        .get("#text").type('Deliver the best possible experience for you as a user')
        cy.get("#submit").click()
    })
      cy.get('#response-message')
        .should('contain', 'Your Post has been updated.')
    })

  it('Fails to', () => {
    cy.server()
    cy.visit('http://localhost:3001')
    cy.route({
      method: 'PUT',
      url: 'http://api.example.com',
      response: 'fixture:single_post.json'
    })
      cy.get('#post-1').click({ force: true })
      cy.get('[name="edit-post"]').click()
      cy.get('#edit-post-form').within(() => {
        cy.get('[name="submit"]').click()
      })
      cy.get('#response-message')
      .should('contain', 'Unable to edit post.')
    })
  })