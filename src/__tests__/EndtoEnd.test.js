import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(5000);
    browser = await puppeteer.launch();0
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .event-description');
    expect(eventDetails).toBeDefined();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .show-details-btn');
    const eventDetails = await page.$('.event .event-description');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .hide-details-btn');
    const eventDetails = await page.$('.event .event-description');
    expect(eventDetails).toBeNull();
  });
});