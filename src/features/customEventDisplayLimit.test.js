import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, within } from "@testing-library/react";
import React from "react";
import App from "../App";
import userEvent from '@testing-library/user-event';

const feature = loadFeature("./src/features/customEventDisplayLimit.feature");

defineFeature(feature, (test) => {
    //scenario 1
    test('Default Event Quantity', async ({ given, when, then }) => {
        let AppComponent;
        given('the user has not specified the number of events', async () => {
            AppComponent = render(<App />);
            await waitFor(() => {
                AppComponent.container.querySelector('#event-list');
            });
        });

        let eventList;
        when('the user views the events section', async () => {
            render(<App />);
            await waitFor(() => {
                eventList = document.getElementById('event-list');
            });
        });

        then('the app should display 32 events by default', async () => {
            await waitFor(() => {
                const eventListItems = within(eventList).queryAllByRole('listitem');
                expect(eventListItems.length).toBe(32);
            });
        });
    });



    //scenario 2
    test('User-Specified Event Quantity', ({ given, when, then }) => {
        let AppComponent;
        let numberOfEventsInput;

        given('the user has specified the number of events', async () => {
            AppComponent = render(<App />);
            numberOfEventsInput = AppComponent.getByPlaceholderText('#');
            await userEvent.type(numberOfEventsInput, '32');
        });

        when('the user views the events section', async () => {
            await waitFor(() => {
                AppComponent.container.querySelector('#event-list');
            });
        });

        then('the app should display exactly as many events as specified by the user', async () => {
            await waitFor(() => {
                const eventList = AppComponent.container.querySelector('#event-list');
                const eventListItems = within(eventList).queryAllByRole('listitem');
                expect(eventListItems.length).toEqual(32);
            });
        });
    });
});
