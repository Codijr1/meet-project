import { loadFeature, defineFeature } from "jest-cucumber";
import { render } from "@testing-library/react";
import React from "react";
import App from "../App";


const feature = loadFeature("./src/features/customEventDisplayLimit.feature");

defineFeature(feature, (test) => {
    // Scenario 1
    test('Default Event Quantity', ({ given, when, then }) => {
        let appRender;

        given('the user has not specified the number of events', () => {
            appRender = render(<App />);
        });

        when('the user views the events section', () => {
            //no input necessary
        });

        then('the app should display 32 events by default', () => {
            const { getByTestId } = appRender;
            const eventList = getByTestId('event-list');
            expect(eventList.children.length).toBe(32);
        });
    });

});
