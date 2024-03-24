import React, { useState } from 'react';

const NumberOfEvents = ({ setNoe, setErrorAlert }) => {
    const [eventNumber, setEventNumber] = useState(32);
    const handleInputChange = (event) => {
        const value = event.target.value;
        if (value === '' || isNaN(value) || value <= 0 || value > 32) {
            setErrorAlert('Number of Events must be between 1 and 32');
            setEventNumber(32);
            setNoe(32);
        } else {
            setErrorAlert('');
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
            />
        </div>
    );
};

export default NumberOfEvents;
