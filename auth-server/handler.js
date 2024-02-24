'use strict';

const { google } = require("googleapis");
const calendar = google.calendar("v3");
const SCOPES = ["https://www.googleapis.com/auth/calendar.events.public.readonly"];
const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env;
const redirect_uris = [
  "https://codijr1.github.io/meet-project/"
];

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  redirect_uris[0]
);


//authorization
module.exports.getAuthURL = async () => {

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      authUrl,
    }),
  };
};

//get token
module.exports.getAccessToken = async (event) => {
  console.log('Received authorization code:', event.pathParameters.code);
  // Decode authorization code extracted from the URL query
  const code = decodeURIComponent(event.pathParameters.code); // Decode the code

  return new Promise((resolve, reject) => {
    oAuth2Client.getToken(code, (error, response) => {
      if (error) {
        console.error('Error exchanging authorization code for token:', error); // Log any error during token exchange
        reject(error);
      } else {
        console.log('Token response:', response); // Log the token response
        resolve(response);
      }
    });
  })
    .then((results) => {
      // Respond with OAuth token 
      console.log('Token successfully retrieved:', results); // Log the successfully retrieved token
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(results),
      };
    })
    .catch((error) => {
      // Handle error and return response
      console.error('Error retrieving token:', error); // Log the error retrieving token
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(error),
      };
    });
};


//get calendar
module.exports.getCalendarEvents = async (event) => {
  return new Promise((resolve, reject) => {
    const access_token = event.queryStringParameters.access_token;
    oAuth2Client.setCredentials({ access_token });

    calendar.events.list(
      {
        calendarId: CALENDAR_ID,
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: "startTime",
      },
      (error, response) => {
        if (error) {
          reject(error); //reject
        } else {
          //resolve
          resolve({
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({ events: response.data.items }),
          });
        }
      }
    );
  })
    //error catchinh
    .catch((error) => {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(error),
      };
    });
};