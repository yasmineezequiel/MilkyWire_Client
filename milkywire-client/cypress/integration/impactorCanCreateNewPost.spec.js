describe('Create new post', () => {

  beforeEach(() => {
    cy.server()
    cy.visit('http://localhost:3001')
  })

  it('Successfully', () => {
    cy.server()
    cy.route({
      method: 'POST',
      url: 'https://api.example.com/post',
      response: 'fixture:single_post.json'
    })
    cy.get('#create-post-form').within(() => {
      cy.get('#create-title').type('Ocean Cleaning')
        .get('#create-text').type('Donate and make your impact.')
        .get('#submit-create-form').click()
      })
    })

  it('Fails to', () => {
    cy.route({
      method: 'POST',
      url: 'https://api.example.com/error_message',
      response: 'fixture:error_message.json'
  })
    cy.get('#create-post-form').within(() => {
      cy.get('#create-title').type('Ocean Cleaning')
        .get('#submit-create-form').click()
    })
  })
})
