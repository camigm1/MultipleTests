import { $ } from '@wdio/globals'
import Page from './page.js';
import Menu from './Menu.js';
import Helpers from './helpers.js'

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
    ///// Data test selectors

    get allAddToCartArray() {
        return [
            'sauce-labs-backpack',
            'sauce-labs-bike-light',
            'sauce-labs-bolt-t-shirt',
            'sauce-labs-fleece-jacket',
            'sauce-labs-onesie',
            'test.allthethings()-t-shirt-(red)'
        ];
    }
    async remove(item){
        return (`[data-test="remove-${item}"]`)
    }

    async add(item){
         return (`[data-test="add-to-cart-${item}"]`)
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
            await btn.click()
            ;
        }
    }
    //New random function to add item to Cart
    async addItemToCart(arr){
        const randomItem = Math.floor(Math.random() * arr.length);
        await arr[randomItem].click()
    }

    async resetCart(){
        await Menu.openHomepage()
        await Helpers.toClick(Menu.hamMenu)
        await Helpers.toClick(Menu.resetAppState)
        await browser.refresh()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    openCart () {
        return super.openCart('cart.html');
    }
    
}

export default new Cart();
