import { getGreeting } from '../support/app.po';

describe('sdk', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command button, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper button, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to sdk!');
  });
});
