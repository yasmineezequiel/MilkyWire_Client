describe('Creates a post', () => {

  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://api.example.com/posts',
      response: 'fixture:posts.json'
    })
    cy.visit('http://localhost:3001')
  })

  it('Successfully', () => {
    cy.server()
      cy.route({
      method: 'POST',
      url: 'https://api.example.com/post',
      response: 'fixture:successful_post.json',
      status: 200
    })
    cy.visit('http://localhost:3001')
    cy.get('#create-post').click()
  
  cy.get('#post-form').within(() => {
    cy.get('#title-input').type('Ocean Cleaning')
    cy.get('#text-input').type('Donate and make your impact')
    cy.get('button[type="button"]').click()
    cy.get('.fileContainer').within(() => {
      const fileName = 'test.json';
      cy.fixture(fileName).then(fileContent => {
        cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/jpg' });
      });
    })
    cy.get('#submit-post').click()
    })
  cy.get('#message')
    .should('contain', 'The post was successfully created.')
  })
  
  it('Fails to', () => {
    cy.server()
      cy.route({
      method: 'POST',
      url: 'https://api.example.com/post',
      response: 'fixture:error.json',
      status: 400
      })
    cy.visit('http://localhost:3001')
    cy.get('#create-post').click()
  
    cy.get('#post-form').within(() => {
    cy.get('#title-input').type('Ocean Cleaning')
    cy.get('button[type="button"]').click()
      cy.get('.fileContainer').within(() => {
        const fileName = 'data.json';
        cy.fixture(fileName).then(fileContent => {
          cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/jpg' });
        });
      })
    cy.get('#submit-post').click()
    })
    cy.get('.errorsContainer').within(() => {
      cy.contains('is not a supported file extension')
    })
    cy.get('#message')
      .should('contain', 'Unable to create post')
    })
})