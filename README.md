
# NG Template v19

## Table of Contents

- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development Server](#development-server)
- [Build](#build)
- [Configuration Files](#configuration-files)
- [E2E Testing with Cypress](#e2e-testing-with-cypress)
- [Unit Testing](#unit-testing)
- [Hosting Servers](#hosting-servers)
- [User Roles](#user-roles)
- [Dependencies](#dependencies)
- [Code Scaffolding](#code-scaffolding)

---

## Project Overview

This project is an Angular 16.2.1 template designed for scalable enterprise applications. It includes a modular structure, E2E testing with Cypress, and a set of pre-configured dependencies for rapid development.

## Project Structure

```
ng-template-v19/
├── angular.json
├── cypress/
│   ├── downloads/
│   ├── e2e/
│   │   ├── first-test.spec.cy.ts
│   │   ├── components/
│   │   └── features/
│   │       ├── sidebar.spec.cy.ts
│   │       └── theme.spec.cy.ts
│   ├── fixtures/
│   ├── plugins/
│   ├── reporters/
│   └── support/
├── public/
│   ├── account.png
│   ├── favicon.ico
│   ├── skyworkslogo-black.png
│   ├── skyworkslogo-white.png
│   └── jsons/
├── src/
│   ├── app/
│   │   ├── config/
│   │   ├── core/
│   │   ├── features/
│   │   ├── shared/
│   │   └── environments/
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
└── ...
```

---

## Installation

1. Ensure you have [Node.js](https://nodejs.org/) and [Angular CLI](https://angular.io/cli) installed.
2. Clone this repository to your local machine.
3. Navigate to the project directory.
4. Install dependencies:
  ```bash
  pnpm install
  ```
5. Start the development server:
  ```bash
  ng serve
  ```

---

## Development Server

Run `ng serve` to start the dev server. Navigate to [http://localhost:4200/](http://localhost:4200/). The application will automatically reload if you change any source files.

---

## Build

Build artifacts are stored in the `dist/` directory.

### Build with Test Configuration

```bash
ng build --base-href=/name/ --configuration=test
```
API for this configuration: `http://example:8734`

### Build with Production Configuration

```bash
ng build --base-href=/name/ --configuration=production
```
API for this configuration: `http://example:8734`

---

## Configuration Files

- `angular.json`: Angular CLI configuration
- `package.json`: Node.js project configuration
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.spec.json`: TypeScript configuration
- `src/environments/environment.ts`: Development environment
- `src/environments/environment.test.ts`: Test environment
- `src/environments/environment.prod.ts`: Production environment

---

## E2E Testing with Cypress

This project comes pre-configured with [Cypress](https://www.cypress.io/) for end-to-end testing.

### Cypress Commands

- `pnpm cypress:open` – Opens the Cypress Test Runner
- `pnpm cypress:run` – Runs Cypress tests in headless mode

### Running Cypress

1. Ensure Cypress is installed:
  ```bash
  pnpm add cypress@15.5.0 --save-dev
  ```
2. If you have SSL issues, you can install Cypress with:
  ```bash
  $env:NODE_TLS_REJECT_UNAUTHORIZED=0; npx cypress install
  ```
3. Run the test runner:
  ```bash
  pnpm cypress:open
  ```
4. Select and run your desired tests from the UI.

---

## Unit Testing

Run unit tests with [Karma](https://karma-runner.github.io):

```bash
ng test
```

---

## Hosting Servers

### Test Environment
- [Test App](http://example:81/<name>/)
- [Test API](http://example:8734/)
- [Test API Swagger](http://example:8734/api-docs)

### Production Environment
- [Production App](http://example:81/<name/)
- [Production API](http://example:8734/)
- [Production API Swagger](http://example:8734/api-docs)

---


## Code Scaffolding

Generate a new component:

```bash
ng generate component components/ComponentName
```

You can also use:

```bash
ng generate directive|pipe|service|class|guard|interface|enum|module
```
