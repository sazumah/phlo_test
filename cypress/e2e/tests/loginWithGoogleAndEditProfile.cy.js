import { newProfileName } from '../../fixtures/google-user-data'

const renderPageWaitingTime = 2000

describe('Should edit profile page', () => {
  before(() => {
    cy.clearCookies()
  })

  it('Should login in user', () => {
    cy.GoogleSocialLogin() //this command can be found in the command.js file
  })

  it('Should edit users profile', () => {
    cy.get('[data-testid="AppTabBar_Profile_Link"]').click()
    cy.get('[href="/settings/profile"]').click()
    cy.wait(renderPageWaitingTime)
    cy.get('[name="displayName"]').clear().type(newProfileName)
    cy.get('[data-testid="Profile_Save_Button"]').click()
    cy.wait(renderPageWaitingTime)
    cy.contains(newProfileName).should('exist')
  })
})
