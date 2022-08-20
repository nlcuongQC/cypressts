Feature: Search Keyword
    Scenario: Search keyword
        Given I navigate to the website
        When I search the keyword
        Then I see the result contains the keyword