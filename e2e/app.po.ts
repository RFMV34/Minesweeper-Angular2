import { browser, element, by } from 'protractor';

export class FlowupMinesweeperPage {
  navigateTo(): any {
    return browser.get('/');
  }

  getParagraphText(): any {
    return element(by.css('app-root h1')).getText();
  }
}
