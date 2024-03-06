import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within } from "@testing-library/react";
import React from "react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

const feature = loadFeature("./src/features/customEventDisplayLimit.feature");

defineFeature(feature, (test) => {
    test('Default Event Quantity', ({ given, when, then }) => {
        given('the user has not specified the number of events', () => {
        });

        when('the user views the events section', () => {

        });
        then('the app should display 32 events by default', () => {

        });
    });

    test('User-Specified Event Quantity', ({ given, when, then }) => {
        given('the user has specified the number of events', () => {

        });

        when('the user views the events section', () => {

        });

        then('the app should display exactly as many events as specified by the user', () => {

        });
    });
});