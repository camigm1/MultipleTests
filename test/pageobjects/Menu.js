import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Menu extends Page {
    /**
     * define selectors using getter methods
     */

    get hamMenu () {
        return $('div[class="bm-burger-button"]');
    }

    get allItems () {
        return $('#inventory_sidebar_link');
    }

    get about () {
        return $('button[type="submit"]');
    }

    get logout () {
        return $('button[type="submit"]');
    }

    get resetAppState () {
        return $('button[type="submit"]');
    }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async hamMenuItems () {
        await this.hamMenu.click();
    }
    async allItemsItems () {
        await this.allItems.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    openPage () {
        return super.openPage('inventory.html');
    }
    
}

export default new Menu();
