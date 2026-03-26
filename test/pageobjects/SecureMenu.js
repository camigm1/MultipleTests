import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecureMenu extends Page {
    /**
     * define selectors using getter methods
     */
    get getDelete(){
        return $('')
    }

    get getMenu () {
        return $('a[id="inventory_sidebar_link"]')
    }

    get getAllItems(){
        return $('span[class="title"]')
    }
    
    get getAbout(){
        return $('h1[class="MuiTypography-root MuiTypography-h1 css-sx6ycq"]')
    }

    get getLogout(){
        return $('#login-button')
    }
    get getReset(){
        return $('a[class="shopping_cart_link"]')
    }

}

export default new SecureMenu();
