import { expect } from '@wdio/globals'
import Menu from '../pageobjects/menu.js'
import Cart from '../pageobjects/cart.js'
import SecureMenu from '../pageobjects/SecureMenu.js'
import SecureCart from '../pageobjects/SecureCart.js'
import LoginPage from '../pageobjects/login.js'
import SecurePage from '../pageobjects/secure.page.js'
import Helpers from '../pageobjects/helpers.js';


describe('Tests Checks Cart Functionality', () => {
    before(async () => {
        await LoginPage.openLogin()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.homePage).toBeExisting()
    })
    it('Positive Test: Should Open the Cart Page', async () => {
        await Helpers.toClick(Cart.shoppingCart)
        await Helpers.asserts(SecureCart.getCart,'')
    })
   it('Positive Test: Adds One Item and checks Cart Inventory Number', async () => {
        await Menu.openHomepage()
        await Helpers.toClick(Cart.addToCartCart)
        await Helpers.asserts(Cart.itemInCart,'1')
    })
    it('Positive Test: Check for correct added item in Cart', async () => {
        await Cart.resetCart()
        await Cart.addAndNavigateToCart()
        await Helpers.asserts(SecureCart.sameItemCart,'Remove')
    })
     it('Positive Test: Checks for removing item in Cart', async () => {
        await Cart.openCart()
        await Helpers.toClick(SecureCart.sameItemCart)
        await Helpers.asserts(SecureCart.removedCartPage,'')
    })
    it('Positive Test: Checks functionality of continue shopping button', async () => {
        await Helpers.toClick(Cart.continueShopping)
        await Helpers.asserts(SecureCart.getContinueShopping,'Products')
    })
    it('Positive Test: Clicks on item inside the Cart', async () => {
        await Cart.addAndNavigateToCart()
        await Helpers.toClick(Cart.itemInCartClick)
        await Helpers.asserts(SecureCart.inventoryName,'Sauce Labs Bike Light')
    })
    it('Positive Test: Clicks on Random Item to add to Cart', async () => {
        await Cart.resetCart()
        await Cart.addItemToCart(Cart.allAddToCartButtons)
        await Helpers.asserts(Cart.itemInCart,'1')
    })
    it('Positive Test: Clicks on All items and adds them to Cart', async () => {
        await Cart.resetCart();
        await Cart.addAllToCart()
        await Helpers.asserts(Cart.itemInCart,Cart.allAddToCartButtons.length.toString())
    })
    
})

  