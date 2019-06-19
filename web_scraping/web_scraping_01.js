const puppeteer = require('puppeteer');

(async () => {
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://news.ycombinator.com/', {"waitUntil" : "networkidle0"});
  
  const articles = await page.evaluate(() => Array.from(document.querySelectorAll('a.storylink')).map(el => el.textContent));
  
  console.log(articles)
  
  await browser.close();
})();