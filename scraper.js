const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.type('#add', '0x8cbd3259c95239f571456bfce2326e121f11d6a6');
    await page.click('#searchsubmit');
    await page.waitForTimeout(2000);

    const extractedText = await page.$eval('*', (el) => el.innerText)
    console.log(extractedText)

    await browser.close();
})();