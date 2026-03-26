import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Cart extends Page {
    /**
     * define selectors using getter methods
     */
    get shoppingCart(){
        return $('.shopping_cart_link')
    }
   
    get itemInCart () { //shows me the number 1 in cart after adding item
        return $('span[class="shopping_cart_badge"]');
    }

    get addToCartCart(){
        return $('#add-to-cart-sauce-labs-bike-light')
    }

    get continueShopping(){
        return $('#continue-shopping')
    }
    
    get itemInCartClick(){
        return $('.inventory_item_name')
    }

    //////////////// All Items Selectors
    get addBackpack(){
        return $('#add-to-cart-sauce-labs-backpack')
    }

    get addBikeLight(){
        return $('#add-to-cart-sauce-labs-bike-light')
    }
    get addBoltShirt(){
        return $('#add-to-cart-sauce-labs-bolt-t-shirt')
    }
    get addJacket(){
        return $('#add-to-cart-sauce-labs-fleece-jacket')
    }

    get addOnesie(){
        return $('#add-to-cart-sauce-labs-onesie')
    }
    // get addRedShirt(){
    //     return $('#add-to-cart-test.allthethings()-t-shirt-(red)')
    // }
    
    get allAddToCartButtons() {
        return [
            this.addBackpack,
            this.addBikeLight,
            this.addBoltShirt,
            this.addJacket,
            this.addOnesie,
            // this.addRedShirt
        ];
    }

    async addAllToCart() {
        for (const btn of this.allAddToCartButtons) {
            await btn.click();
        }
    }
    //////////////////////////HOVER STATES HAM MENU
    


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
    openCart () {
        return super.openCart('cart.html');
    }
    
}

export default new Cart();
