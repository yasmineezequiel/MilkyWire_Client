describe('Impactor user can view a list of posts', () => {

  it("contains post content", () => {
    cy.get('[name="post-1"]').within(() => {
      cy.get('[name="post-title"]').should('contain', 'Ocean Cleaning')
    })
  })
})

describe('Impactor cannot view posts if there are none', () => {

  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://api.example.com/posts',
      response: '{"posts":[]}'
    })
    cy.visit('http://localhost:3001')
  })

  it('sees message for no posts', () => {
    cy.get("#message").should('contain', 'There are no posts')
  })
})