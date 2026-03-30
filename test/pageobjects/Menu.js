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
    

    
    get allHamLinkBtns(){
        return[this.allItems,this.about,this.logout,this.resetAppState]
    }
    

    /**
     * overwrite specific options to adapt it to page object
     */
    openHomepage () {
        return super.openHomepage('inventory.html');
    }
    
}

export default new Menu();
