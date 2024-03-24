//number of events 
import React, { useState } from 'react';

const NumberOfEvents = ({ setNoe, setErrorText }) => {
    const [eventNumber, setEventNumber] = useState(32);

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (value === '' || isNaN(value) || value <= 0 || value > 32) {
            setErrorText('Number of Events must be greater than 0');
            setEventNumber('32');
            setNoe(32);
        } else {
            setErrorText('');
            const parsedValue = parseInt(value, 10);
            setEventNumber(parsedValue);
            setNoe(parsedValue);
        }
    };

    return (
        <div id="numberOfEvents">
            <input
                type="number"
                value={eventNumber}
                onChange={handleInputChange}
                min="1"
                max="32"
                placeholder="#"
            />
        </div>
    );
};

export default NumberOfEvents;