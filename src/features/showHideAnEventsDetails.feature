Feature: A button which shows and then hides an event's details


    Scenario: Default Detail Concealment
        Given the main page is open
        When the app displays a list of events
        Then the event details should be hidden by default

    Scenario: A user wants to show Event details
        Given there is an event with hidden details
        When the user clicks on the event to show details
        Then the app should display the details of the event

    Scenario: A user wants to hide Event details
        Given there is an event with displayed details
        When the user clicks on the event to hide details
        Then the app should hide the details of the event