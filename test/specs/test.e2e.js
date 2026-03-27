import { expect } from '@wdio/globals'
import Menu from '../pageobjects/Menu.js'
import SecureMenu from '../pageobjects/SecureMenu.js'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import Helpers from '../pageobjects/helpers.js';

describe('Hamburger Menu Functionality', () => {

    before(async () => {
        await LoginPage.openLogin()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.homePage).toBeExisting()
    })
    beforeEach(async () => {// reopens the menu before each test
        await Menu.openHomepage()
        await Helpers.toClick(Menu.hamMenu)
    })

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
    
    // it('Checks for Multiple Clicks', async () => {
    //     await Menu.multipleClicks()
    // })
    it('Clicks on Delete Button in Hamburger Menu', async () => {
        await Helpers.toClick(Menu.deleteBtn)
        await Helpers.asserts(SecurePage.homePage,'Open Menu')
    })
     it('Clicks on Logout Button', async () => {
        await Helpers.toClick(Menu.logout)
        await Helpers.asserts(SecureMenu.getLogout,'')
    })
   
    // it('Clicks on About Link', async () => {
    //     await Menu.about.click()
    //     await expect(SecureMenu.getAbout).toBeExisting()
    //     await expect(SecureMenu.getAbout).toHaveText(
    //         expect.stringContaining("The World's Only Full-Lifecycle AI-Quality Platform"))
    // })

})

  