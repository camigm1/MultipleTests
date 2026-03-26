import { expect } from '@wdio/globals'
import Menu from '../pageobjects/Menu.js'
import Cart from '../pageobjects/cart.js'
import SecureMenu from '../pageobjects/SecureMenu.js'
import SecureCart from '../pageobjects/SecureCart.js'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'


describe('Tests Cart Functionality', () => {

    before(async () => {
        await LoginPage.openLogin()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.homePage).toBeExisting()
    })
    it('Should Open the Cart Page', async () => {
        await Cart.shoppingCart.click()
        await expect(SecureCart.getCart).toBeExisting()
        await expect(SecureCart.getCart).toHaveText(
            expect.stringContaining(''))
    })
   it('Adds and checks Cart Inventory Number', async () => {
        await Menu.openHomepage()
        await Cart.addToCartCart.click()
        // await Cart.itemInCart.click()
        await expect(Cart.itemInCart).toBeExisting()
        await expect(Cart.itemInCart).toHaveText(
            expect.stringContaining('1'))
    })
    it('Check for correct added item in Cart', async () => {
        await SecureCart.sameItemCart.click()
        await Cart.addToCartCart.click();
        await Cart.shoppingCart.click()
        await expect(SecureCart.sameItemCart).toBeExisting()
        await expect(SecureCart.sameItemCart).toHaveText(
            expect.stringContaining("Remove"))
    })
     it('Checks for removing item in Cart', async () => {
        await Cart.openCart()
        await SecureCart.sameItemCart.click()
        await expect(SecureCart.removedCartPage).toBeExisting()
        await expect(SecureCart.removedCartPage).toHaveText(
            expect.stringContaining(""))
    })
    it('Checks functionality of continue shopping button', async () => {
        await Cart.continueShopping.click()
        await expect(SecureCart.getContinueShopping).toBeExisting()
        await expect(SecureCart.getContinueShopping).toHaveText(
            expect.stringContaining("Products"))
    })
    it('Clicks on item inside the cart', async () => {
        await Cart.addToCartCart.click()
        await Cart.shoppingCart.click()
        await Cart.itemInCartClick.click()
        await expect(SecureCart.inventoryName).toBeExisting()
        await expect(SecureCart.inventoryName).toHaveText(
            expect.stringContaining("Sauce Labs Bike Light"))
    })
    it('Clicks on Multiple items to add them cart', async () => {
        await Menu.openHomepage()
        await Menu.hamMenu.click();
        await Menu.resetAppState.click()
        await Cart.shoppingCart.click()
        await Cart.continueShopping.click()
        await Cart.addAllToCart()
        await expect(Cart.itemInCart).toBeExisting()
        await expect(Cart.itemInCart).toHaveText(
            expect.stringContaining('5'))
    })
})

  