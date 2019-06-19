const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://news.ycombinator.com/', {"waitUntil" : "networkidle0"});
  
  const articles = await page.evaluate(() => Array.from(document.querySelectorAll('a.storylink')).map(a => a.href));
  
  await Promise.all(articles.map(async article => {
    const tab = await browser.newPage();
    try {
      await tab.goto(article, {"waitUntil" : "networkidle0"})
      await tab.screenshot({path: `./screenshots/${article.split('/').slice(-1)[0]}.png`});
    } catch(err) { /* Whoops! */ }
    
    await tab.close()
  }))
  
  await browser.close();
})();