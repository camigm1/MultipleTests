import { expect } from '@wdio/globals'
import Menu from '../pageobjects/Menu.js'
import SecureMenu from '../pageobjects/SecureMenu.js'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'



describe('Hamburger Functionality', () => {

    before(async () => {
        await LoginPage.openLogin()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.homePage).toBeExisting()
    })

    it('Should verify home page after login', async () => {
        await expect(SecurePage.homePage).toHaveText(
            expect.stringContaining('Open Menu'))
    })

    it('Should Open the Hamburger Menu', async () => {
        await Menu.openPage()
        await Menu.hamMenuItems()
        await expect(SecureMenu.getMenu).toBeExisting()
        await expect(SecureMenu.getMenu).toHaveText(
            expect.stringContaining('All Items'))
    })
    it('Should click on All Items', async () => {
        await Menu.openPage()
        await Menu.allItemsItems()
        await expect(SecureMenu.getAllItems).toBeExisting()
        await expect(SecureMenu.getAllItems).toHaveText(
            expect.stringContaining('All Items'))
    })
    // it('Clicks on All Items', async () => {
    //     await Menu.openPage()
    //     await Menu.allItemsItems()
    //     await expect(SecureMenu.getAllItems).toBeExisting()
    //     await expect(SecureMenu.getAllItems).toHaveText(
    //         expect.stringContaining('All Items'))
    // })

})

  