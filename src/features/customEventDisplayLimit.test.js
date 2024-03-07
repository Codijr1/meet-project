import { loadFeature, defineFeature } from "jest-cucumber";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import App from "../App";

const feature = loadFeature("./src/features/customEventDisplayLimit.feature");

defineFeature(feature, (test) => {
    // Scenario 1: Default Event Quantity
    test('Default Event Quantity', async ({ given, when, then }) => {
        given('the user has not specified the number of events', () => {
            // No input required
        });

        when('the user views the events section', async () => {
            render(<App />);
            await waitFor(() => screen.getByRole('list', { id: 'event-list' }));
        });

        then('the app should display 32 events by default', () => {
            const eventList = screen.getByRole('list', { id: 'event-list' });
            expect(eventList.length) === ('32');
        });
    });


    //scenario 2
    test('User-Specified Event Quantity', ({ given, when, then }) => {
        given('the user has specified the number of events', () => {
        });

        when('the user views the events section', () => {
            render(<App />);
        });

        then('the app should display exactly as many events as specified by the user', () => {
        });
    });
});