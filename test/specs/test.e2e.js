import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Menu from '../pageobjects/Menu.js'
import SecureMenu from '../pageobjects/SecureMenu.js'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import Helpers from '../pageobjects/helpers.js';


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

    it('Should verify home page after login', async () => {
        await expect(SecurePage.homePage).toHaveText(
            expect.stringContaining('Open Menu'))
    })
    it('Should Open the Hamburger Menu', async () => {
        await Helpers.asserts(SecureMenu.getMenu,'All Items')
    })
    it('Should click on All Items', async () => {
        await Helpers.toClick(Menu.allItems)
        await Helpers.asserts(SecureMenu.getAllItems,'Products')
    })
    it('Reset Sidebar empties cart', async () => {
        await Helpers.toClick(Menu.addToCart)
        await Helpers.toClick(Menu.resetAppState)
        await Helpers.asserts(SecureMenu.getReset,'')
    })
    
    
    it('Checks hover color for All Items', async () => {
        await Helpers.hoverStateAssertion(Menu.allItems)
    })
    it('Checks hover color for About Link', async () => {
        await Helpers.hoverStateAssertion(Menu.about)
    })
    it('Checks hover color for Reset App State', async () => {
        await Helpers.hoverStateAssertion(Menu.resetAppState)
    })
    it('Checks hover color for logout', async () => {
        await Helpers.hoverStateAssertion(Menu.logout)
    })
    it('Negative Test: Checks for Multiple Clicks in All Items link', async () => {
        await Helpers.multipleClicks(Menu.allItems)
    })
    it('Negative Test: Checks for Multiple Clicks in Reset App State', async () => {
        await Helpers.multipleClicks(Menu.resetAppState);
        await Helpers.asserts(SecureMenu.getReset,"")
    })
    it('Clicks on Delete Button in Hamburger Menu', async () => {
        await Helpers.toClick(Menu.deleteBtn)
        await Helpers.asserts(SecurePage.homePage,'Open Menu')
    })
    it('Clicks on Logout Button', async () => {
        await Helpers.toClick(Menu.logout)
        await Helpers.asserts(SecureMenu.getLogout,'')
    })
     it('Clicks on About Link and checks for new browser to open', async () => {
        await Helpers.toClick(Menu.about)
        await expect(browser).toHaveUrl('https://saucelabs.com/');     
        await browser.back();   
    })
    
   })

  