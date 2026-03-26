import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecureCart extends Page {
    /**
     * define selectors using getter methods
     */
    get getCart(){
        return $('#continue-shopping')
    }
    get sameItemCart(){
        return $('#remove-sauce-labs-bike-light')
}
    get removedCartPage(){
        return $('.removed_cart_item')
    }
    get getContinueShopping(){
        return $('.title')
    }
    get inventoryName(){
        return $('div[data-test="inventory-item-name"]')
    }
}

export default new SecureCart();
