import { userLoginDetails } from '../fixtures/google-user-data'

Cypress.Commands.add('GoogleSocialLogin', () => {
  const { email, password } = userLoginDetails
  const socialLoginOptions = {
    username: `${email}`,
    password: `${password}`,
    loginUrl: 'https://twitter.com/home',
    headless: false,
    logs: true,
    loginSelector: '[class*="nsm7Bb-HzV7m-LgbsSe-MJoBVe"]',
    postLoginSelector: '[href="/home"]',
    popupDelay: 3000,
    cookieDelay: 2000,
    args: [
      ' — disable-web-security',
      ' — user-data-dir',
      ' — allow-running-insecure-content',
    ],
    isPopup: true,
    getAllBrowserCookies: true,
  }

  cy.task('GoogleSocialLogin', socialLoginOptions).then(({ cookies }) => {
    cookies.map((cookie) => {
      cy.setCookie(cookie.name, cookie.value, {
        domain: cookie.domain,
        expiry: cookie.expires,
        httpOnly: cookie.httpOnly,
        path: cookie.path,
        secure: cookie.secure,
      })
      Cypress.Cookies.defaults({
        preserve: cookie.name,
      })
    })
    cy.visit('https://twitter.com/home')
  })
})
