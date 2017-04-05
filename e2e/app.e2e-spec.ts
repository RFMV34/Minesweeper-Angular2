import { FlowupMinesweeperPage } from './app.po';

describe('flowup-minesweeper App', () => {
  let page: FlowupMinesweeperPage;

  beforeEach(() => {
    page = new FlowupMinesweeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
