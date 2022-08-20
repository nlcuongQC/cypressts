import locator from '../../fixtures/locator.json'
class HomePage {

    searchKeyword(keywordValue: string) {
        cy.get(locator.homepage.searchTxtBx).type(keywordValue + '{enter}')
    }

    navigateToPage() {
        cy.visit('/')
    }
}

export default new HomePage()