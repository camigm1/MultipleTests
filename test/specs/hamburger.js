import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Menu from '../pageobjects/menu.js'
import SecureMenu from '../pageobjects/SecureMenu.js'
import LoginPage from '../pageobjects/login.js'
import SecurePage from '../pageobjects/secure.page.js'
import Helpers from '../pageobjects/helpers.js';
import Cart from '../pageobjects/cart.js'


describe('Hamburger Menu Functionality', () => {
    beforeEach(async () => {
    await Menu.openHomepage();
    
    const currentUrl = await browser.getUrl();
    if (!currentUrl.includes('inventory')) {
        await LoginPage.openLogin()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.homePage).toBeExisting()
    }
    await browser.pause(1000);
    await Helpers.toClick(Menu.hamMenu);
    });
    it('Positive Test: Should verify home page after login', async () => {
        await expect(SecurePage.homePage).toHaveText(
            expect.stringContaining('Open Menu'))
    })
    it('Positive Test: Should Open the Hamburger Menu', async () => {
        await Helpers.asserts(SecureMenu.getMenu,'All Items')
    })
    it('Positive Test: Should click on "All Items" link taking you to homepage where "All Items" reside', async () => {
        await Helpers.toClick(Cart.shoppingCart)
        await Helpers.toClick(Menu.hamMenu);
        await Helpers.toClick(Menu.allItems)
        await Helpers.asserts(SecureMenu.getAllItems,'Products')
    })
    it('Positive Test: Reset Sidebar empties cart', async () => {
        await Helpers.toClick(Menu.addToCart)
        await Helpers.toClick(Menu.resetAppState)
        await Helpers.asserts(SecureMenu.getReset,'')
    })
    it('Positive Test: Checks hover state for all the Links in the Ham Menu', async () => {
        await Helpers.checkHoverAllAssertion(Menu.allHamLinkBtns)
    })
    // it('Negative Test: Negative Test: Checks for Multiple Clicks in All Items link', async () => {
    //     await Helpers.multipleClicks(Menu.allItems, 10)
    // })
    // it('Negative Test: Checks for Multiple Clicks in Reset App State', async () => {
    //     await Helpers.multipleClicks(Menu.resetAppState, 20);
    //     await Helpers.asserts(SecureMenu.getReset,"")
    // })
    it('Positive Test: Clicks on Delete Button in Hamburger Menu', async () => {
        await Helpers.toClick(Menu.deleteBtn)
        await Helpers.asserts(SecurePage.homePage,'Open Menu')
    })
    it('Positive Test: Clicks on Logout Button', async () => {
        await Helpers.toClick(Menu.logout)
        await Helpers.asserts(SecureMenu.getLogout,'')
    })
     it('Positive Test: Clicks on About Link and checks for new browser to open', async () => {
        await Helpers.toClick(Menu.about)
        await expect(browser).toHaveUrl('https://saucelabs.com/');       
        await browser.back();   
    })
    
   })

  