import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Menu extends Page {
    /**
     * define selectors using getter methods
     */
    get deleteBtn(){
        return $('#react-burger-cross-btn')
    }
    get hamMenu () {
        return $('#react-burger-menu-btn');
    }

    get allItems () {
        return $('#inventory_sidebar_link');
    }

    get about () {
        return $('#about_sidebar_link');
    }

    get logout () {
        return $('#logout_sidebar_link');
    }

    get resetAppState () {
        return $('#reset_sidebar_link');
    }

    get addToCart(){
        return $('#add-to-cart-sauce-labs-backpack')
    }
    
    
    
    //////////////////////////HOVER STATES HAM MENU
    async allItemsHover () {
        await this.allItems.moveTo();
        await expect(this.allItems).toHaveStyle({color: "rgba(61,220,145,1)"});
    }

    async aboutLinkHover(){
        await this.about.moveTo();
        await expect(this.about).toHaveStyle({color: "rgba(61,220,145,1)"});
    }

    async logoutBtnHover(){
        await this.logout.moveTo();
        await expect(this.logout).toHaveStyle({color: "rgba(61,220,145,1)"});
    }

    async resetHover(){
        await this.resetAppState.moveTo();
        await expect(this.resetAppState).toHaveStyle({color: "rgba(61,220,145,1)"});
    }
    ///////////
    async multipleClicks(){
        for(let x=1;x<10;x++){
            await this.allItems.click()
            await browser.pause(2000)
        }
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    openHomepage () {
        return super.openHomepage('inventory.html');
    }
    
}

export default new Menu();
