// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import { extractLocations, getEvents } from './api.js';
import CitySearch from './components/CitySearch.js';
import NumberOfEvents from './components/NumberOfEvents.js';
import EventList from './components/EventList.js';
import { InfoAlert } from './components/Alert.js';


function App() {
  const [events, setEvents] = useState([]);
  const [noe, setNoe] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');
  const [infoAlert, setInfoAlert] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const allEvents = await getEvents();
      const filteredEvents =
        currentCity === 'See all cities'
          ? allEvents
          : allEvents.filter((event) => event.location === currentCity);
      setEvents(filteredEvents ? filteredEvents.slice(0, noe) : []);
      setAllLocations(extractLocations(allEvents));
    };

    fetchData();
  }, [currentCity, noe]);

  return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
      </div>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents setNoe={setNoe} />
      <EventList events={events} />
    </div>
  );
}

export default App;
