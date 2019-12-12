describe('Impactor can view post list', () => {
  beforeEach(() => {
    cy.server()
    cy.visit('http://localhost:3001')
  })

  it('successfully', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://api.example.com/posts',
      response: 'fixtures:post_list.json'
    })
  })
  it("contain post content", () => {
    cy.get('h1')
    .first().should('have','Ocean Cleaning')
    .next().should('have','Donate and make your impact.')
})

  it('sees message for no posts', () => {
    cy.route({
      method: 'GET',
      url: 'https://api.example.com/posts',
      response: {post_list:[]}
    })
    cy.visit('http://localhost:3001')
    cy.get("#message").should('contain', 'There are no posts')
  })
})