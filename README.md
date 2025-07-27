# 🚀 Cypress Mini Project

A comprehensive end-to-end testing project built with Cypress for automated web application testing.

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Configuration](#configuration)
- [Writing Tests](#writing-tests)
- [Best Practices](#best-practices)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This project demonstrates modern end-to-end testing practices using Cypress. It includes examples of:
- User interface testing
- API testing
- Cross-browser testing
- Visual regression testing
- Custom commands and utilities

## ✨ Features

- **🔧 Modern Setup**: Latest Cypress version with TypeScript support
- **📱 Responsive Testing**: Tests across different viewport sizes
- **🌐 Cross-browser**: Support for Chrome, Firefox, and Edge
- **📊 Reporting**: Detailed test reports with screenshots and videos
- **🚦 CI/CD Ready**: GitHub Actions integration
- **🎨 Custom Commands**: Reusable test utilities
- **📝 Page Object Model**: Organized test structure

## 🔧 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nihal-gami/cypress-mini-project.git
   cd cypress-mini-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Verify installation**
   ```bash
   npx cypress verify
   ```

## 📁 Project Structure

```
cypress-mini-project/
├── cypress/
│   ├── e2e/                 # Test files
│   ├── fixtures/            # Test data
│   ├── support/             # Commands and utilities
│   └── downloads/           # Downloaded files
├── cypress.config.js        # Cypress configuration
├── package.json
└── README.md
```

## 🏃‍♂️ Running Tests

### Interactive Mode (Cypress Test Runner)
```bash
npm run cy:open
# or
npx cypress open
```

### Headless Mode (Command Line)
```bash
npm run cy:run
# or
npx cypress run
```

### Specific Browser
```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
npx cypress run --browser edge
```

### Specific Test File
```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

## ⚙️ Configuration

### Environment Variables
Create a `cypress.env.json` file for environment-specific configurations:

```json
{
  "baseUrl": "https://your-app.com",
  "apiUrl": "https://api.your-app.com",
  "username": "test@example.com",
  "password": "password123"
}
```

### Cypress Configuration
Key settings in `cypress.config.js`:

```javascript
module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000
  }
}
```

## ✍️ Writing Tests

### Basic Test Structure
```javascript
describe('Feature Name', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should perform specific action', () => {
    cy.get('[data-cy="username"]').type('user@example.com');
    cy.get('[data-cy="password"]').type('password123');
    cy.get('[data-cy="login-btn"]').click();
    
    cy.url().should('include', '/dashboard');
    cy.get('[data-cy="welcome-message"]').should('be.visible');
  });
});
```

### Custom Commands
Located in `cypress/support/commands.js`:

```javascript
Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/login');
    cy.get('[data-cy="username"]').type(username);
    cy.get('[data-cy="password"]').type(password);
    cy.get('[data-cy="login-btn"]').click();
    cy.url().should('include', '/dashboard');
  });
});
```

## 🎯 Best Practices

### 1. **Use Data Attributes**
```html
<button data-cy="submit-btn">Submit</button>
```

### 2. **Avoid Hard-coded Waits**
```javascript
// ❌ Don't do this
cy.wait(5000);

// ✅ Do this instead
cy.get('[data-cy="loading"]').should('not.exist');
```

### 3. **Use Page Object Pattern**
```javascript
class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillUsername(username) {
    cy.get('[data-cy="username"]').type(username);
    return this;
  }

  fillPassword(password) {
    cy.get('[data-cy="password"]').type(password);
    return this;
  }

  submit() {
    cy.get('[data-cy="login-btn"]').click();
  }
}

export default new LoginPage();
```

### 4. **Test Data Management**
Use fixtures for test data:
```javascript
cy.fixture('users').then((users) => {
  cy.login(users.admin.username, users.admin.password);
});
```

## 🔍 Debugging

### Screenshots and Videos
- Screenshots are automatically taken on test failures
- Videos are recorded for all test runs
- Files are saved in `cypress/screenshots` and `cypress/videos`

### Debug Commands
```javascript
cy.debug();        // Pause execution
cy.pause();        // Pause with resume option
cy.log('Debug message'); // Console logging
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🛡️ CI/CD Integration

### GitHub Actions Example
```yaml
name: Cypress Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: cypress-io/github-action@v5
        with:
          build: npm run build
          start: npm start
```

## 📈 Test Reports

Generate detailed HTML reports:
```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
npx cypress run --reporter mochawesome
```

## 🔗 Useful Links

- [Cypress Documentation](https://docs.cypress.io/)
- [Best Practices Guide](https://docs.cypress.io/guides/references/best-practices)
- [Cypress Examples](https://github.com/cypress-io/cypress-example-kitchensink)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Nihal Gami**
- GitHub: [@nihal-gami](https://github.com/nihal-gami)
- Location: Gandhinagar, India
- Role: SDET (Software Development Engineer in Test)

## 🙏 Acknowledgments

- Cypress.io team for the amazing testing framework
- The open-source community for continuous inspiration
- All contributors who help improve this project

---

⭐ **If you find this project helpful, please give it a star!** ⭐