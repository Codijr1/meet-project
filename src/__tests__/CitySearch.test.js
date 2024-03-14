//src/__tests__/CitySearch.test.js

import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitySearch from '../components/CitySearch.js';
import App from '../App.js';
import { extractLocations, getEvents } from '../api.js';

describe('<CitySearch /> component', () => {
    let CitySearchComponent;

    beforeEach(() => {
        CitySearchComponent = render(
            <CitySearch allLocations={[]}
                setCurrentCity={() => { }}
                setInfoAlert={() => { }}
            />);
    })

    test('suggestion list is hidden default', () => {
        const suggestionList = CitySearchComponent.queryByRole('list');
        expect(suggestionList).not.toBeInTheDocument();
    });

    test('renders a suggestion list when city box is clicked', async () => {
        const user = userEvent.setup();
        const cityTextBox = CitySearchComponent.queryByRole('textbox');

        await user.click(cityTextBox);
        const suggestionList = CitySearchComponent.queryByRole('list');
        expect(suggestionList).toBeInTheDocument();
        expect(suggestionList).toHaveClass('suggestion');
    })

    test('renders text input', () => {
        const cityTextBox = CitySearchComponent.queryByRole('textbox');
        expect(cityTextBox).toBeInTheDocument();
        expect(cityTextBox).toHaveClass('city');
    });

    test('updates suggestion list when user enters data in textbox', async () => {
        const user = userEvent.setup();
        const allEvents = await getEvents();
        const allLocations = extractLocations(allEvents);

        CitySearchComponent.rerender(
            <CitySearch allLocations={allLocations}
                setCurrentCity={() => { }}
                setInfoAlert={() => { }} />);
        // User types 'Berlin' in textbox
        const cityTextBox = CitySearchComponent.queryByRole('textbox');
        await user.type(cityTextBox, 'Berlin');

        const suggestions = allLocations ? allLocations.filter((location) => {
            return location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1;
        }) : [];

        const suggestionList = CitySearchComponent.queryAllByRole('listitem');

        expect(suggestionList).toHaveLength(suggestions.length + 1);
        for (let i = 0; i < suggestions.length; i++) {
            expect(suggestionList[i].textContent).toBe(suggestions[i]);
        }

    });

    test('renders suggestion text in the textbox after clicking suggestion', async () => {
        const user = userEvent.setup();
        const allEvents = await getEvents();
        const allLocations = extractLocations(allEvents);
        CitySearchComponent.rerender(
            <CitySearch allLocations={allLocations}
                setCurrentCity={() => { }}
                setInfoAlert={() => { }} />);

        const cityTextBox = CitySearchComponent.queryByRole('textbox');
        await user.type(cityTextBox, 'Berlin');

        const Berlinsuggestion = CitySearchComponent.queryAllByRole('listitem')[0];

        await user.click(Berlinsuggestion);

        expect(cityTextBox).toHaveValue(Berlinsuggestion.textContent);


    });

});

describe('<CitySearch/>, integration', () => {

    test('renders suggestionList when app is rendered and user focus in textbox', async () => {
        const user = userEvent.setup();
        const appComponent = render(<App />);
        const appDom = appComponent.container.firstChild;

        const citySearchDom = appDom.querySelector('#city-search');
        const textbox = within(citySearchDom).queryByRole('textbox');
        await user.click(textbox);

        const allEvents = await getEvents();
        const allLocations = extractLocations(allEvents);

        const suggestionList = within(citySearchDom).queryAllByRole('listitem');
        expect(suggestionList.length).toBe(allLocations.length + 1);
    });
})