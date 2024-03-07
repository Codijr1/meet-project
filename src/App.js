// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import { extractLocations, getEvents } from './api.js';
import CitySearch from './components/CitySearch.js';
import NumberOfEvents from './components/NumberOfEvents.js';
import EventList from './components/EventList.js';

function App() {
  const [events, setEvents] = useState([]);
  const [noe, setNoe] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');
  useEffect(() => {
    const fetchData = async () => {
      const allEvents = await getEvents();
      const filteredEvents =
        currentCity === 'See all cities'
          ? allEvents
          : allEvents.filter((event) => event.location === currentCity);
      setEvents(filteredEvents.slice(0, noe));
      setAllLocations(extractLocations(allEvents));
    };

    fetchData();
  }, [currentCity, noe]);

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents setNoe={setNoe} />
      <EventList events={events} />
    </div>
  );
}

export default App;
