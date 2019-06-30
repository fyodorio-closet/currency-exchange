import { getGreeting } from '../support/app.po';

describe('currency-convertor', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to currency-convertor!');
  });
});
