import React, { useEffect, useState } from 'react';
import './App.css';
import CitySearch from './CitySearch.js';
import EventList from './EventList.js';
import NumberOfEvents from './NumberOfEvents.js';
import { extractLocations, getEvents } from '../api.js';

function App() {
  const [events, setEvents] = useState([]);
  const [noe, setNoe] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === 'See all cities'
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, noe));
    setAllLocations(extractLocations(allEvents));
  };

  useEffect(() => {
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