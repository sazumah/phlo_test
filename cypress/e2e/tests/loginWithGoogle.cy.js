describe('Should login with google authentication service', () => {
  before(() => {
    cy.clearCookies()
  })

  it('Should login in user', () => {
    cy.GoogleSocialLogin()
    cy.url().should('include', '/home')
  })
})
