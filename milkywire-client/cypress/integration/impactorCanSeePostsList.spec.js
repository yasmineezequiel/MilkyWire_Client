describe('Impactor can view post list', () => {
  beforeEach(() => {
    cy.server()
  })

  it('successfully', () => {
    cy.visit('http://localhost:3001')
    cy.route({
      method: 'GET',
      url: 'https://api.example.com/posts',
      response: 'fixture:posts.json'
    })
  })

  it("contains post content", () => {
    cy.get('title')
    .first().should('have','Ocean Cleaning')
    .next('text').should('have','Donate and make your impact.')
})

  it('sees message for no posts', () => {
    cy.route({
      method: 'GET',
      url: 'https://api.example.com/error',
      response: '{"error":[]}'
    })
    cy.get("#message").should('contain', 'There are no posts')
  })
})