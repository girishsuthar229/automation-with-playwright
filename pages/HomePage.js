export class HomePage {
    constructor(page) {
        this.page = page;
        this.flashMessage = page.locator('#flash');
    }

    getFlashMessage() {
        return this.flashMessage;
    }
}