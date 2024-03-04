# Meet-Project

## Application Overview:
The Meet App is a progressive web application (PWA) developed using React and employing a test-driven development (TDD) approach. It is designed to operate without a server and utilizes serverless functions to interact with the Google Calendar API for fetching upcoming events.

### Google Calendar API Integration:
The Meet App seamlessly integrates with the Google Calendar API to retrieve forthcoming events. It employs serverless functions to facilitate access authorization for public calendar events. Upon entering key and secret credentials, users request an access token from the authorization server. Subsequently, upon consenting to access by logging into their Google account, users can view and interact with calendar events.

#### Key Features:
City-Based Event Filtering:
Given a user's interest in filtering events by city,
When the user interacts with the app,
Then the app should display a curated list of events taking place in the selected city.

Scenario 1: Default Event Display
Given the user hasn't specified a city,
When the user opens the app,
Then the app should display a list of upcoming events from all cities.

Scenario 2: City Search Suggestions
Given the main page is open,
When the user begins typing in the city search textbox,
Then the user should receive a list of cities (suggestions) that match their input.

Scenario 3: City Selection
Given the user was typing in the city textbox and the list of suggested cities is showing,
When the user selects a city from the list,
Then the app should update to display upcoming events in the selected city.

Event Details Toggle:
Given a user's desire to view or hide event details,
When the user interacts with the app,
Then the app should respond accordingly by showing or hiding event details.

Scenario 1: Default Detail Concealment
Given the main page is open,
When the app displays a list of events,
Then the event details should be hidden by default.

Scenario 2: Show Event Details
Given there is an event with hidden details,
When the user clicks on the event to show details,
Then the app should display the details of the event.

Scenario 3: Hide Event Details
Given there is an event with displayed details,
When the user clicks on the event to hide details,
Then the app should hide the details of the event.

Custom Event Display Limit:
Given a user's desire to specify the number of events displayed,
When the user interacts with the app,
Then the app should respond by displaying the specified number of events.

Scenario 1: Default Event Quantity
Given the user has not specified the number of events,
When the user views the events section,
Then the app should display 32 events by default.

Scenario 2: User-Specified Event Quantity
Given the user has specified the number of events,
When the user views the events section,
Then the app should display exactly as many events as specified by the user.

Offline Functionality:
Given a user's desire to use the app offline,
When the user interacts with the app while offline,
Then the app should provide offline functionality.

Scenario 1: Offline Usage
Given the user is offline,
When the user interacts with the app,
Then the app should provide offline functionality.

Scenario 2: Offline Data Download
Given the user is online,
When the user chooses to download information for offline usage,
Then the app should download and store the necessary data.

Home Screen Shortcut:
Given a user's desire to add a shortcut for the app to the home screen,
When the user interacts with the app,
Then the app should enable the addition of a shortcut to the device's home screen.
Scenario 1: Shortcut Addition
Given the app is installed on the user's device,
When the user adds an app shortcut to the home screen,
Then the app shortcut should be visible on the home screen.

Event Visualization Charts:
Given a user's desire to view charts representing event details,
When the user interacts with the app,
Then the app should respond by displaying event visualization charts.
Scenario 1: Chart Display
Given the user is on the home screen,
When the user clicks to view a chart of the events,
Then the app should display a chart visualizing event details.