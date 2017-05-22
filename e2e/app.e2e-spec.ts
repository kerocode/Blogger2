import { CiscoSpark2Page } from './app.po';

describe('cisco-spark2 App', () => {
  let page: CiscoSpark2Page;

  beforeEach(() => {
    page = new CiscoSpark2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
