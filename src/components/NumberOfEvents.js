import React, { useState } from 'react';

const NumberOfEvents = ({ setNoe }) => {
    const [eventNumber, setEventNumber] = useState(32);
    const handleInputChange = (event) => {
        const value = event.target.value;
        if (value === '') {
            setEventNumber('');
            setNoe(32);
        } else {
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