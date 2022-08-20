import homePage from "../pages/homePage"
import resultPage from "../pages/resultPage"
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import searchData from '../../fixtures/searchData.json';


Given('I navigate to the website', () => {
    homePage.navigateToPage()
})

When('I search the keyword', () => {
    homePage.searchKeyword(searchData.keyword)
})

Then('I see the result contains the keyword', () => {
    resultPage.firstResultTitle().should('contain', searchData.keyword)
})