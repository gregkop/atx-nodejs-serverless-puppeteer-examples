const puppeteer = require('puppeteer');

(async () => {
    const query = 'where is my '

    const config = {
        headless: true, 
        defaultViewport: null // Use maximum resolution as viewport instead of default 800 x 600
    }

    const browser = await puppeteer.launch(config);
    const page = await browser.newPage();

    await page.goto('https://google.com/', {"waitUntil" : "networkidle0"});
    await page.type('#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input', query)
    
    await page.waitFor(100)
    
    const suggestions = await page.evaluate(() => Array.from(document.querySelectorAll('.suggestions-inner-container')).map(el => el.querySelector('*[role="option"]').textContent));
    
    console.log(suggestions)
    
    await browser.close();
})();