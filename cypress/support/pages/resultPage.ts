import locator from '../../fixtures/locator.json'

class ResultPage {
    firstResultTitle() {
        return cy.get(locator.resultPage.firstResultTitle).first()
    }
}

export default new ResultPage()