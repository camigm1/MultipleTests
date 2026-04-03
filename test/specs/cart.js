import Menu from '../pageobjects/menu.js'
import Cart from '../pageobjects/cart.js'
import SecureCart from '../pageobjects/SecureCart.js'
import LoginPage from '../pageobjects/login.js'
import Helpers from '../pageobjects/helpers.js';


describe('Tests Checks Cart Functionality', () => {
    before(async () => {
        await LoginPage.openLogin()
        await LoginPage.login('standard_user', 'secret_sauce')
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
    it('Positive Test: Check for correct added item in Cart & button functionality', async () => {
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
    it('Positive Test: Clicks on item inside the Cart to expand detail', async () => {
        await Cart.addAndNavigateToCart()
        await Helpers.toClick(Cart.itemInCartClick)
        await Helpers.asserts(SecureCart.inventoryName,'Sauce Labs Bike Light')
    })
    it('Positive Test: Clicks on Random Item to add to Cart', async () => {
        await Cart.resetCart()
        await Cart.addItemToCart(Cart.allAddToCartButtons)
        await Helpers.toClick(Cart.shoppingCart)
        await Helpers.asserts(Cart.itemInCart,'1')
    })
    it('Positive Test: Adds a random number of items to cart, then deletes', async () => {
        await Cart.resetCart()
        const itemsAdded = await Cart.grabRandNumArr()
        await Helpers.toClick(Cart.shoppingCart)
        await Helpers.asserts(Cart.itemInCart,String(itemsAdded))
        await Cart.removeRandNumArr(itemsAdded)
        await expect(Cart.itemInCart).not.toBeExisting()
    })
    it('Positive Test: Clicks on All items and adds them to Cart', async () => {
        await Cart.resetCart();
        await Cart.addAllToCart()
        await Helpers.asserts(Cart.itemInCart,Cart.allAddToCartButtons.length.toString())
    })
    it('Negative Test: Add items to Cart then navigate back and forth with browser', async () => {
        await Cart.resetCart();
        await Cart.addAndNavigateToCart();
        await browser.back();
        await browser.forward();
        await Helpers.asserts(SecureCart.sameItemCart, "Remove")
    })
    it('Negative Test: Add items to Cart then logout and log back in then check cart if item still there', async () => {
        await Cart.resetCart();
        await Cart.addItemToCart(Cart.allAddToCartButtons);
        await Cart.logoutFromPage()
        await LoginPage.openLogin()
        await LoginPage.login('standard_user', 'secret_sauce')
        await Helpers.asserts(Cart.shoppingCart, "1")
    })
    it('Negative Test: Attempt to access /cart.html while logged out', async () => {
        await Cart.resetCart();
        await Cart.logoutFromPage()
        await Cart.openCart()
        await Helpers.asserts(Cart.errorBtn,"Epic sadface: You can only access '/cart.html' when you are logged in.")
    })
})

  