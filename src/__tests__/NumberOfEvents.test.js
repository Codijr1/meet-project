import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents.js';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />);
    });

    test('has an element with "spinbutton" role', () => {
        expect(NumberOfEventsComponent.queryByRole("spinbutton")).toBeInTheDocument();
    });

    test('default value is 32', () => {
        expect(NumberOfEventsComponent.queryByRole('spinbutton')).toHaveValue('32');
    });

});
