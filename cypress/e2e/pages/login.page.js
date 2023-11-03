class LoginPage {

    selectors = {
        usernameField: '#user-name',
        passwordField: '#password',
        loginButton: '#login-button'
    };

    setUser(user){
        return cy.get(this.selectors.usernameField).type(user);
    }

    setPassword(password) {
        return cy.get(this.selectors.passwordField).type(password);
    }

    clickLogin() {
        return cy.get(this.selectors.loginButton).click();
    }
}

export default LoginPage;