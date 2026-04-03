import { $ } from '@wdio/globals'
import Page from './page.js';
import Menu from './menu.js';
import Cart from './cart.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Helpers extends Page {
    
     async asserts(existing,text){//Text Assertions
        await expect(existing).toBeExisting()
        await expect(existing).toHaveText(
            expect.stringContaining(text))
    }

     async toClick(selector) {// Adds click function to selectors
            await selector.waitForClickable({ timeout: 5000 });
            await selector.click();
    }
    
    async multipleClicks(selector,numclicks){// Adds multiple clicks to a link
        for(let x=1;x<=numclicks;x++){
            await selector.click()
            await browser.pause(1000)
        }
    }

    async checkHoverAllAssertion(selectors){ //Loops through array to check for hover state
        for(let selector of selectors)
        {await selector.moveTo();
        await expect(selector).toHaveStyle({color: "rgba(61,220,145,1)"});
        await browser.pause(1000)}
    }
 }

export default new Helpers();
