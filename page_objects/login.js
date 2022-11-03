class LoginPage {
    get emailInput () {
        return cy.get ('input[type="email" ]')
    }

    get passwordInput () {
        return cy.get ('input[type="password" ]')
    }

    get submitButton () {
        return cy.get ('buton[type="submit" ]');

    }

    login(email = Cypress.env('validEmail'), password = Cypress.env('validPassword')) {
        this.emailInput
        this.passwordInput
        this.submitButton.click();
    }
}

export const loginPage = new LoginPage ();