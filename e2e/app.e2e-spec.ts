import { AngTstPage } from './app.po';

describe('ang-tst App', () => {
  let page: AngTstPage;

  beforeEach(() => {
    page = new AngTstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
