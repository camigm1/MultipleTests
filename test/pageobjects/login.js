import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get gettingUsername () {
        return $('#user-name');
    }

    get gettingPassword () {
        return $('#password');
    }

    get SubmitBtn () {
        return $('#login-button');
    }

   
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.gettingUsername.setValue(username);
        await this.gettingPassword.setValue(password);
        await this.SubmitBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    openLogin () {
        return super.openLogin();
    }
}

export default new LoginPage();
