import { DIDemoPage } from './app.po';

describe('didemo App', function() {
  let page: DIDemoPage;

  beforeEach(() => {
    page = new DIDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
