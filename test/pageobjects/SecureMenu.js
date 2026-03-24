import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecureMenu extends Page {
    /**
     * define selectors using getter methods
     */
    get getMenu () {
        return $('a[id="inventory_sidebar_link"]')
    }

    get getAllItems(){
        return $('[id="item_4_title_link"]')
    }
    
    get getAbout(){
        return $('h1[class="MuiTypography-root MuiTypography-h1 css-sx6ycq"]')
    }

    get getLogout(){
        return $('#login-button')
    }
    

}

export default new SecureMenu();
