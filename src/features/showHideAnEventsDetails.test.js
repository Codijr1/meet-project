import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor } from '@testing-library/react';
import Event from '../components/Event.js';
import App from '../App.js'
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {

    //scenario 1
    test('Default Detail Concealment', ({ given, when, then }) => {
        let eventDetailsVisible = false;

        given('the main page is open', async () => {
            render(<App />);
        });

        when('the app displays a list of events', () => {
            const eventList = document.getElementById('event-list');
            eventDetailsVisible = eventList.querySelectorAll('.details').length > 0;
        });

        then('the event details should be hidden by default', () => {
            expect(eventDetailsVisible).toBeFalsy();
        });
    });

    // scenario 2
    test('A user wants to show Event details', ({ given, when, then }) => {
        let eventDetailsVisible = false;

        given('there is an event with hidden details', async () => {
            render(<Event event={{ description: 'Some details' }} />);
            await waitFor(() => {
                const showDetailsButton = document.querySelector('.showDetailsButton');
                eventDetailsVisible = showDetailsButton ? !showDetailsButton.classList.contains('collapsed') : false;
            });
        });

        when('the user clicks on the event to show details', async () => {
            const showDetailsButton = document.querySelector('.showDetailsButton');
            userEvent.click(showDetailsButton);
            await waitFor(() => {
                eventDetailsVisible = document.querySelector('.event p') !== null;
            });
        });

        then('the app should display the details of the event', () => {
            expect(eventDetailsVisible).toBeTruthy();
        });
    });

    // scenario 3
    test('A user wants to hide Event details', ({ given, when, then }) => {
        let eventDetailsVisible = true;

        given('there is an event with displayed details', async () => {
            render(<Event event={{ description: 'Some details' }} />);
            await waitFor(() => {
                const showDetailsButton = document.querySelector('.showDetailsButton');
                eventDetailsVisible = showDetailsButton ? !showDetailsButton.classList.contains('collapsed') : false;
            });
        });


        when('the user clicks on the event to hide details', async () => {
            const showDetailsButton = document.querySelector('.showDetailsButton');
            userEvent.click(showDetailsButton);
            await waitFor(() => {
                eventDetailsVisible = document.querySelector('.details') !== null;
            });
        });

        then('the app should hide the details of the event', () => {
            expect(eventDetailsVisible).toBeFalsy();
        });
    });
});