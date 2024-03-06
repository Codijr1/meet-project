Feature: Custom Event Display Limit

        Given a user's desire to specify the number of events displayed
        When the user interacts with the app
        Then the app should respond by displaying the specified number of events

    Scenario: Default Event Quantity

        Given the user has not specified the number of events
        When the user views the events section
        Then the app should display 32 events by default

    Scenario: User-Specified Event Quantity
        Given the user has specified the number of events
        When the user views the events section
        Then the app should display exactly as many events as specified by the user