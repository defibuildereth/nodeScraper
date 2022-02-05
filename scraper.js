const puppeteer = require('puppeteer');

const site = 'http://localhost:3000/';
const content = '0x8cbd3259c95239f571456bfce2326e121f11d6a6';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(site);
    await page.type('#add', content);
    await page.click('#searchsubmit');
    await page.waitForTimeout(2000);

    const extractedText = await page.$eval('*', (el) => el.innerText)
    console.log(extractedText)
    // console.log(extractedText.length)

    await browser.close();
})();