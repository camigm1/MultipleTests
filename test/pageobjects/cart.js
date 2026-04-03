import { $ } from '@wdio/globals'
import Page from './page.js';
import Menu from './menu.js';
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

    get errorBtn(){
        return $('h3[data-test="error"]')
    }
    ///// Data test selectors

    // get allAddToCartTextArr() {
    //     return [
    //         'sauce-labs-backpack',
    //         'sauce-labs-bike-light',
    //         'sauce-labs-bolt-t-shirt',
    //         'sauce-labs-fleece-jacket',
    //         'sauce-labs-onesie',
    //         'test.allthethings()-t-shirt-(red)'
    //     ];
    // }
    // async remove(item){
    //     return (`#remove-${item}`)
    // }

    // async add(item){
    //      return (`#add-to-cart-${item}`)
    // }

    

    // async selectorCheck(word){
    //     return $(`#${word}-`)
    // }

    

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
        }
    }

    
    // New random function to add item to Cart
    async addItemToCart(arr){
        const randomNum = Math.floor(Math.random() * arr.length);
        let randItem = await arr[randomNum].click();
        return randItem
    }

    async grabRandNumArr(){
        const randomCount = Math.floor(Math.random() * this.allAddToCartButtons.length) + 1;
        const shuffled = [...this.allAddToCartButtons
        ].sort(() => 0.5 - Math.random());
        const randomSubset = shuffled.slice(0, randomCount);
        for (const btn of randomSubset) {
            await btn.click()
        }
         return randomSubset.length;   
        }
    
    async removeRandNumArr(itemsAdded) {
    const removeButtons = await $$('.cart_item .btn_secondary');
    for (let i = 0; i < itemsAdded; i++) {
        await removeButtons[i].click();
    }
}

    async resetCart(){
        await Menu.openHomepage()
        await Helpers.toClick(Menu.hamMenu)
        await Helpers.toClick(Menu.resetAppState)
        await browser.refresh()
    }

    async addAndNavigateToCart(){
        await Helpers.toClick(this.addToCartCart)
        await Helpers.toClick(this.shoppingCart)
    }

    async logoutFromPage(){
        await Helpers.toClick(Menu.hamMenu);
        await Helpers.toClick(Menu.logout);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    openCart () {
        return super.openCart('cart.html');
    }
    
}

export default new Cart();



