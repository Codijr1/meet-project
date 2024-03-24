// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import { extractLocations, getEvents } from './api.js';
import CitySearch from './components/CitySearch.js';
import NumberOfEvents from './components/NumberOfEvents.js';
import EventList from './components/EventList.js';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert.js';


function App() {
  const [events, setEvents] = useState([]);
  const [noe, setNoe] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState('');
  const [warningAlert, setWarningAlert] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (navigator.onLine) {
        setWarningAlert('');
      } else {
        setWarningAlert('You are currently offline, some features may be unavailable. Data will be loaded from local cache');
      }
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
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents setNoe={setNoe} setErrorAlert={setErrorAlert} />
      <EventList events={events} />
    </div>
  );
}

export default App;