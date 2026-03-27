import { $ } from '@wdio/globals'
import Page from './page.js';
import Menu from './Menu.js';

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
   
    get itemInCart () { //shows me the number amount in cart after adding item
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
    get addRedShirt(){
        return $('button[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
    }
    
    get allAddToCartButtons() {
        return [
            this.addBackpack,
            this.addBikeLight,
            this.addBoltShirt,
            this.addJacket,
            this.addOnesie,
            this.addRedShirt
        ];
    }

    async addAllToCart() {
        for (const btn of this.allAddToCartButtons) {
            await btn.click();
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
