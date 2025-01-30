class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = 'input[id="username"]';
      this.passwordInput = 'input[id="password"]';
      this.submitButton = 'button[type="submit"]';
    }
    
    async goto() {
      await this.page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    }
    
    async login(email, password) {
      await this.page.fill(this.usernameInput, email);
      await this.page.fill(this.passwordInput, password);
      await this.page.click(this.submitButton);
    }
  }
  
  module.exports = LoginPage;