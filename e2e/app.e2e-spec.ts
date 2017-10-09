import { Task.Manager.DemoPage } from './app.po';

describe('task.manager.demo App', () => {
  let page: Task.Manager.DemoPage;

  beforeEach(() => {
    page = new Task.Manager.DemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
