import { loadFeature, defineFeature } from "jest-cucumber";
import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";
import mockData from '../mock-data';



const feature = loadFeature("./src/features/customEventDisplayLimit.feature");

defineFeature(feature, (test) => {
    test('Default Event Quantity', ({ given, when, then }) => {
        given('the user has not specified the number of events', () => {
            //no inout required
        });

        when('the user views the events section', () => {
            render(<App />);
        });

        then('the app should display 32 events by default', () => {
            const eventItems = mockData.slice(0, 32).map(event => screen.getByText(event.summary));
            expect(eventItems.length).toBe(32);
        });
    });

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