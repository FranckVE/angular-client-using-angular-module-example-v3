import { AngularClientUsingAngularModuleExampleV3Page } from './app.po';

describe('angular-client-using-angular-module-example-v3 App', () => {
  let page: AngularClientUsingAngularModuleExampleV3Page;

  beforeEach(() => {
    page = new AngularClientUsingAngularModuleExampleV3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
