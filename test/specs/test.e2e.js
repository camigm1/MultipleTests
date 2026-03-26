// import { expect } from '@wdio/globals'
// import Menu from '../pageobjects/Menu.js'
// import SecureMenu from '../pageobjects/SecureMenu.js'
// import LoginPage from '../pageobjects/login.page.js'
// import SecurePage from '../pageobjects/secure.page.js'

// describe('Hamburger Menu Functionality', () => {

//     before(async () => {
//         await LoginPage.openLogin()
//         await LoginPage.login('standard_user', 'secret_sauce')
//         await expect(SecurePage.homePage).toBeExisting()
//     })
//     beforeEach(async () => {
//         await Menu.openHomepage()
//         await Menu.hamMenu.click()  // reopens the menu before each test
//     })

//     it('Should verify home page after login', async () => {
//         await expect(SecurePage.homePage).toHaveText(
//             expect.stringContaining('Open Menu'))
//     })

//     it('Should Open the Hamburger Menu', async () => {
        
//         await expect(SecureMenu.getMenu).toBeExisting()
//         await expect(SecureMenu.getMenu).toHaveText(
//             expect.stringContaining('All Items'))
//     })
//     it('Should click on All Items', async () => {
//         await Menu.allItems.click()
//         await expect(SecureMenu.getAllItems).toBeExisting()
//         await expect(SecureMenu.getAllItems).toHaveText(
//             expect.stringContaining('Products'))
//     })
//     it('Reset Sidebar empties cart', async () => {
//         await Menu.addToCart.click()
//         await Menu.resetAppState.click()
//         await browser.pause(2000)
//         await expect(SecureMenu.getReset).toBeExisting()
//         await expect(SecureMenu.getReset).toHaveText(
//             expect.stringContaining(""))
//     })
//     it('Checks hover color for All Items', async () => {
//         await Menu.allItemsHover();
//     })
//     it('Checks hover color for About Link', async () => {
//         await Menu.aboutLinkHover()
//     })
//     it('Checks hover color for Reset App State', async () => {
//         await Menu.resetHover()
//     })
//     it('Checks hover color for logout', async () => {
//         await Menu.logoutBtnHover()
//     })
    
//     // it('Checks for Multiple Clicks', async () => {
//     //     await Menu.multipleClicks()
//     // })
//     it('Clicks on Delete Button in Hamburger Menu', async () => {
//         await Menu.deleteBtn.click()
//         await expect(SecurePage.homePage).toBeExisting()
//         await expect(SecurePage.homePage).toHaveText(
//             expect.stringContaining("Open Menu"))
//     })
//      it('Clicks on Logout Button', async () => {
//         await Menu.logout.click()
//         await expect(SecureMenu.getLogout).toBeExisting()
//         await expect(SecureMenu.getLogout).toHaveText(
//             expect.stringContaining(""))
//     })
   
//     // it('Clicks on About Link', async () => {
//     //     await Menu.about.click()
//     //     await expect(SecureMenu.getAbout).toBeExisting()
//     //     await expect(SecureMenu.getAbout).toHaveText(
//     //         expect.stringContaining("The World's Only Full-Lifecycle AI-Quality Platform"))
//     // })

// })

  