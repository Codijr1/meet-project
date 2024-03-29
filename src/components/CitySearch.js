import { useEffect, useState } from 'react';

const CitySearch = ({ allLocations, setCurrentCity, setInfoAlert }) => {
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (event) => {
        const value = event.target.value;
        const filteredLocations = allLocations ? allLocations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        }) : [];
        setQuery(value);
        setSuggestions(filteredLocations);

        let infoText;
        if (filteredLocations.length === 0) {
            infoText = "City not found, examine spelling or try another"
        } else {
            infoText = ""
        }
        setInfoAlert(infoText);
    };

    const handleClick = (event) => {
        const value = event.target.textContent;
        setQuery(value);
        setShowSuggestion(false);
        setCurrentCity(value);
        setInfoAlert("")
    };

    useEffect(() => {
        setSuggestions(allLocations);
    }, [allLocations]);

    return (
        <div id="city-search">
            <input
                type="text"
                className="city"
                placeholder="Search for a city"
                value={query}
                onFocus={() => setShowSuggestion(true)}
                onChange={handleInputChange}
            />
            {showSuggestion ? <ul className='suggestion'>
                {suggestions.map((suggestion) => {
                    return <li onClick={handleClick} key={suggestion}>{suggestion}</li>
                })}
                <li key='See all the cities'>
                    <b>See all cities</b>
                </li>
            </ul> : null}
        </div>
    );
};

export default CitySearch;
