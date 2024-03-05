import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
    test('Default Detail Concealment.', ({ given, when, then }) => {
        given('the main page is open,', () => {

        });

        when('the app displays a list of events,', () => {

        });

        then('the event details should be hidden by default.', () => {

        });
    });

    test('A user wants to show Event details.', ({ given, when, then }) => {
        given('there is an event with hidden details,', () => {

        });

        when('the user clicks on the event to show details,', () => {

        });

        then('the app should display the details of the event.', () => {

        });
    });


    test('A user wants to hide Event details.', ({ given, when, then }) => {
        given('there is an event with displayed details,', () => {

        });

        when('the user clicks on the event to hide details,', () => {

        });

        then('the app should hide the details of the event.', () => {

        });
    });
});