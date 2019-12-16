describe('Impactor can view specific post', () => {

it('View available posts on landing page', () => {
  cy.server()
  cy.route({
    method: "GET",
    url: 'https://api.example.com/posts',
    response: 'fixture:posts.json'
  })
  cy.route({
    method: "GET",
    url: 'https://api.example.com/posts/1',
    response: 'fixture:post.json'
  });
  cy.visit('http://localhost:3001')
    cy.get("#post_1")
    .click()
    cy.get('#specific-post')
      .within(() => {
    cy.get('#post-title')
      .should('have', 'Ocean Cleaning')
    cy.get('#post-text')
      .should('have', 'Donate and make your impact')
  })
})
})

