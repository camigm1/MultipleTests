import { $ } from '@wdio/globals'
import Page from './page.js';
import Menu from './Menu.js';
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
            await selector.click();
    }
    
    async multipleClicks(selector){// Adds multiple clicks to a link
        for(let x=1;x<=10;x++){
            await selector.click()
            await browser.pause(1000)
        }
    }

    async hoverStateAssertion(selector){// Checks for hover state color
        await selector.moveTo();
        await expect(selector).toHaveStyle({color: "rgba(61,220,145,1)"});
 }
}

export default new Helpers();
