// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// [START gae_node_request_example]
import express, { response } from "express";
import fetch from "node-fetch";
import cors from "cors"

const app = express();

// app.use(cors())
app.use('/',express.static('dist/weather-app-angular'));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.get('/', (req, res) => {
    res.status(200).send('Hello, world!').end();
});

app.get('/autoComplete/:val', async (req, res) => {
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.params.val}&types=(cities)&key=addKeyHere`

    const options = {
        "method": "GET"
    }
    const response = await fetch(url, options)
        .then(result => result.json())
        .catch(error => console.log('ERROR'))

    
    res.send(response)
})


app.get('/card/:lat/:long', async (req, res) => {

    const url1 = `https://api.tomorrow.io/v4/timelines?location=${req.params.lat},${req.params.long}&fields=temperature,temperatureApparent,temperatureMax,temperatureMin,weatherCode,visibility,sunriseTime,sunsetTime,moonPhase,cloudCover,precipitationType,precipitationProbability,windSpeed,humidity,visibility,sunriseTime,sunsetTime,&timesteps=1d&timezone=America/Los_Angeles&units=imperial&apikey=addKeyHere`
    const url2 = `https://api.tomorrow.io/v4/timelines?location=${req.params.lat},${req.params.long}&fields=temperature,humidity,windSpeed,windDirection,pressureSeaLevel,pressureSurfaceLevel&timesteps=1h&units=imperial&apikey=addKeyHere`
    const options = {
        "method": "GET"
    }





    let a = {
        "data": {
            "timelines": [
                {
                    "timestep": "1d",
                    "startTime": "2021-10-18T05:00:00-07:00",
                    "endTime": "2021-11-01T05:00:00-07:00",
                    "intervals": [
                        {
                            "startTime": "2021-10-18T05:00:00-07:00",
                            "values": {
                                "temperature": 77.23,
                                "temperatureApparent": 77.23,
                                "weatherCode": 1001,
                                "visibility": 9.94,
                                "sunriseTime": "2021-10-18T06:05:00-07:00",
                                "sunsetTime": "2021-10-18T17:31:40-07:00",
                                "moonPhase": 4,
                                "cloudCover": 100,
                                "temperatureMax": 77.23,
                                "temperatureMin": 57.88,
                                "precipitationType": 1,
                                "precipitationProbability": 0,
                                "windSpeed": 17.38,
                                "humidity": 62.27
                            }
                        },
                        {
                            "startTime": "2021-10-19T05:00:00-07:00",
                            "values": {
                                "temperature": 76.69,
                                "temperatureApparent": 76.69,
                                "weatherCode": 1001,
                                "visibility": 9.94,
                                "sunriseTime": "2021-10-19T06:05:00-07:00",
                                "sunsetTime": "2021-10-19T17:31:40-07:00",
                                "moonPhase": 4,
                                "cloudCover": 100,
                                "temperatureMax": 76.69,
                                "temperatureMin": 53.83,
                                "precipitationType": 1,
                                "precipitationProbability": 5,
                                "windSpeed": 13.47,
                                "humidity": 71.18
                            }
                        },
                        {
                            "startTime": "2021-10-20T05:00:00-07:00",
                            "values": {
                                "temperature": 75.63,
                                "temperatureApparent": 75.63,
                                "weatherCode": 1000,
                                "visibility": 9.94,
                                "sunriseTime": "2021-10-20T06:06:40-07:00",
                                "sunsetTime": "2021-10-20T17:30:00-07:00",
                                "moonPhase": 4,
                                "cloudCover": 100,
                                "temperatureMax": 75.63,
                                "temperatureMin": 53.69,
                                "precipitationType": 0,
                                "precipitationProbability": 0,
                                "windSpeed": 6.98,
                                "humidity": 65.5
                            }
                        },
                        {
                            "startTime": "2021-10-21T05:00:00-07:00",
                            "values": {
                                "temperature": 77.54,
                                "temperatureApparent": 77.54,
                                "weatherCode": 1000,
                                "visibility": 15,
                                "sunriseTime": "2021-10-21T06:06:40-07:00",
                                "sunsetTime": "2021-10-21T17:30:00-07:00",
                                "moonPhase": 4,
                                "cloudCover": 84.04,
                                "temperatureMax": 77.54,
                                "temperatureMin": 55.9,
                                "precipitationType": 1,
                                "precipitationProbability": 5,
                                "windSpeed": 8.55,
                                "humidity": 69.04
                            }
                        },
                        {
                            "startTime": "2021-10-22T05:00:00-07:00",
                            "values": {
                                "temperature": 77.94,
                                "temperatureApparent": 77.94,
                                "weatherCode": 1000,
                                "visibility": 15,
                                "sunriseTime": "2021-10-22T06:06:40-07:00",
                                "sunsetTime": "2021-10-22T17:30:00-07:00",
                                "moonPhase": 5,
                                "cloudCover": 93.13,
                                "temperatureMax": 77.94,
                                "temperatureMin": 55.27,
                                "precipitationType": 1,
                                "precipitationProbability": 0,
                                "windSpeed": 9.33,
                                "humidity": 72.27
                            }
                        },
                        {
                            "startTime": "2021-10-23T05:00:00-07:00",
                            "values": {
                                "temperature": 78.37,
                                "temperatureApparent": 78.37,
                                "weatherCode": 1000,
                                "visibility": 15,
                                "sunriseTime": "2021-10-23T06:06:40-07:00",
                                "sunsetTime": "2021-10-23T17:28:20-07:00",
                                "moonPhase": 5,
                                "cloudCover": 9.22,
                                "temperatureMax": 78.37,
                                "temperatureMin": 54,
                                "precipitationType": 0,
                                "precipitationProbability": 0,
                                "windSpeed": 13,
                                "humidity": 63.77
                            }
                        },
                        {
                            "startTime": "2021-10-24T05:00:00-07:00",
                            "values": {
                                "temperature": 77.76,
                                "temperatureApparent": 77.76,
                                "weatherCode": 1000,
                                "visibility": 15,
                                "sunriseTime": "2021-10-24T06:10:00-07:00",
                                "sunsetTime": "2021-10-24T17:28:20-07:00",
                                "moonPhase": 5,
                                "cloudCover": 36,
                                "temperatureMax": 77.76,
                                "temperatureMin": 54,
                                "precipitationType": 0,
                                "precipitationProbability": 0,
                                "windSpeed": 8.61,
                                "humidity": 48.64
                            }
                        },
                        {
                            "startTime": "2021-10-25T05:00:00-07:00",
                            "values": {
                                "temperature": 80.62,
                                "temperatureApparent": 78.85,
                                "weatherCode": 1000,
                                "visibility": 15,
                                "sunriseTime": "2021-10-25T06:10:00-07:00",
                                "sunsetTime": "2021-10-25T17:26:40-07:00",
                                "moonPhase": 5,
                                "cloudCover": 36,
                                "temperatureMax": 80.62,
                                "temperatureMin": 55.08,
                                "precipitationType": 0,
                                "precipitationProbability": 0,
                                "windSpeed": 6.8,
                                "humidity": 48.82
                            }
                        },
                        {
                            "startTime": "2021-10-26T05:00:00-07:00",
                            "values": {
                                "temperature": 78.33,
                                "temperatureApparent": 78.33,
                                "weatherCode": 1000,
                                "visibility": 15,
                                "sunriseTime": "2021-10-26T06:10:00-07:00",
                                "sunsetTime": "2021-10-26T17:25:00-07:00",
                                "moonPhase": 6,
                                "cloudCover": 0,
                                "temperatureMax": 78.33,
                                "temperatureMin": 54.86,
                                "precipitationType": 0,
                                "precipitationProbability": 0,
                                "windSpeed": 6.78,
                                "humidity": 48.82
                            }
                        },
                        {
                            "startTime": "2021-10-27T05:00:00-07:00",
                            "values": {
                                "temperature": 80.87,
                                "temperatureApparent": 78.84,
                                "weatherCode": 1000,
                                "visibility": 15,
                                "sunriseTime": "2021-10-27T06:11:40-07:00",
                                "sunsetTime": "2021-10-27T17:25:00-07:00",
                                "moonPhase": 6,
                                "cloudCover": 0,
                                "temperatureMax": 80.87,
                                "temperatureMin": 54.54,
                                "precipitationType": 0,
                                "precipitationProbability": 0,
                                "windSpeed": 7.54,
                                "humidity": 45.56
                            }
                        },
                        {
                            "startTime": "2021-10-28T05:00:00-07:00",
                            "values": {
                                "temperature": 77.58,
                                "temperatureApparent": 77.58,
                                "weatherCode": 1000,
                                "visibility": 15,
                                "sunriseTime": "2021-10-28T06:11:40-07:00",
                                "sunsetTime": "2021-10-28T17:23:20-07:00",
                                "moonPhase": 6,
                                "cloudCover": 0,
                                "temperatureMax": 77.58,
                                "temperatureMin": 54.54,
                                "precipitationType": 0,
                                "precipitationProbability": 0,
                                "windSpeed": 9.93,
                                "humidity": 44.78
                            }
                        },
                        {
                            "startTime": "2021-10-29T05:00:00-07:00",
                            "values": {
                                "temperature": 81.64,
                                "temperatureApparent": 79.52,
                                "weatherCode": 1000,
                                "visibility": 15,
                                "sunriseTime": "2021-10-29T06:11:40-07:00",
                                "sunsetTime": "2021-10-29T17:23:20-07:00",
                                "moonPhase": 6,
                                "cloudCover": 85.53,
                                "temperatureMax": 81.64,
                                "temperatureMin": 55.58,
                                "precipitationType": 1,
                                "precipitationProbability": 0,
                                "windSpeed": 22.82,
                                "humidity": 70.91
                            }
                        },
                        {
                            "startTime": "2021-10-30T05:00:00-07:00",
                            "values": {
                                "temperature": 73.6,
                                "temperatureApparent": 73.6,
                                "weatherCode": 1000,
                                "visibility": 15,
                                "sunriseTime": "2021-10-30T06:13:20-07:00",
                                "sunsetTime": "2021-10-30T17:21:40-07:00",
                                "moonPhase": 7,
                                "cloudCover": 64.6,
                                "temperatureMax": 73.6,
                                "temperatureMin": 46.65,
                                "precipitationType": 1,
                                "precipitationProbability": 0,
                                "windSpeed": 30.42,
                                "humidity": 72.23
                            }
                        },
                        {
                            "startTime": "2021-10-31T05:00:00-07:00",
                            "values": {
                                "temperature": 74.91,
                                "temperatureApparent": 74.91,
                                "weatherCode": 1000,
                                "visibility": 15,
                                "sunriseTime": "2021-10-31T06:13:20-07:00",
                                "sunsetTime": "2021-10-31T17:21:40-07:00",
                                "moonPhase": 7,
                                "cloudCover": 0,
                                "temperatureMax": 74.91,
                                "temperatureMin": 46.65,
                                "precipitationType": 0,
                                "precipitationProbability": 0,
                                "windSpeed": 6.71,
                                "humidity": 72.36
                            }
                        },
                        {
                            "startTime": "2021-11-01T05:00:00-07:00",
                            "values": {
                                "temperature": 80.33,
                                "temperatureApparent": 78.67,
                                "weatherCode": 1000,
                                "visibility": 15,
                                "sunriseTime": "2021-11-01T06:13:20-07:00",
                                "sunsetTime": "2021-11-01T17:21:40-07:00",
                                "moonPhase": 7,
                                "cloudCover": 0,
                                "temperatureMax": 80.33,
                                "temperatureMin": 51.35,
                                "precipitationType": 0,
                                "precipitationProbability": 0,
                                "windSpeed": 6.24,
                                "humidity": 72.36
                            }
                        }
                    ]
                }
            ]
        }
    }

    let b = {
        "data": {
            "timelines": [
                {
                    "timestep": "1h",
                    "startTime": "2021-10-08T03:00:00Z",
                    "endTime": "2021-10-12T15:00:00Z",
                    "intervals": [
                        {
                            "startTime": "2021-10-08T03:00:00Z",
                            "values": {
                                "temperature": 68.68,
                                "humidity": 79,
                                "windSpeed": 11.61,
                                "windDirection": 51.88,
                                "pressureSeaLevel": 30.08,
                                "pressureSurfaceLevel": 30.02
                            }
                        },
                        {
                            "startTime": "2021-10-08T04:00:00Z",
                            "values": {
                                "temperature": 63.48,
                                "humidity": 86.07,
                                "windSpeed": 13.04,
                                "windDirection": 33.15,
                                "pressureSeaLevel": 30.09,
                                "pressureSurfaceLevel": 30
                            }
                        },
                        {
                            "startTime": "2021-10-08T05:00:00Z",
                            "values": {
                                "temperature": 64.62,
                                "humidity": 84.6,
                                "windSpeed": 12.44,
                                "windDirection": 32.44,
                                "pressureSeaLevel": 30.08,
                                "pressureSurfaceLevel": 29.98
                            }
                        },
                        {
                            "startTime": "2021-10-08T06:00:00Z",
                            "values": {
                                "temperature": 65.95,
                                "humidity": 82.98,
                                "windSpeed": 12.04,
                                "windDirection": 30.07,
                                "pressureSeaLevel": 30.07,
                                "pressureSurfaceLevel": 29.96
                            }
                        },
                        {
                            "startTime": "2021-10-08T07:00:00Z",
                            "values": {
                                "temperature": 67.12,
                                "humidity": 81.32,
                                "windSpeed": 11.83,
                                "windDirection": 33.17,
                                "pressureSeaLevel": 30.05,
                                "pressureSurfaceLevel": 29.96
                            }
                        },
                        {
                            "startTime": "2021-10-08T08:00:00Z",
                            "values": {
                                "temperature": 67.93,
                                "humidity": 80.09,
                                "windSpeed": 11.21,
                                "windDirection": 34.77,
                                "pressureSeaLevel": 30.04,
                                "pressureSurfaceLevel": 29.95
                            }
                        },
                        {
                            "startTime": "2021-10-08T09:00:00Z",
                            "values": {
                                "temperature": 68.38,
                                "humidity": 80.27,
                                "windSpeed": 9.84,
                                "windDirection": 38.08,
                                "pressureSeaLevel": 30.03,
                                "pressureSurfaceLevel": 29.95
                            }
                        },
                        {
                            "startTime": "2021-10-08T10:00:00Z",
                            "values": {
                                "temperature": 67.23,
                                "humidity": 82.9,
                                "windSpeed": 9.1,
                                "windDirection": 38.26,
                                "pressureSeaLevel": 30.03,
                                "pressureSurfaceLevel": 29.96
                            }
                        },
                        {
                            "startTime": "2021-10-08T11:00:00Z",
                            "values": {
                                "temperature": 66.67,
                                "humidity": 83.73,
                                "windSpeed": 8.68,
                                "windDirection": 40.99,
                                "pressureSeaLevel": 30.05,
                                "pressureSurfaceLevel": 29.97
                            }
                        },
                        {
                            "startTime": "2021-10-08T12:00:00Z",
                            "values": {
                                "temperature": 66.52,
                                "humidity": 83.91,
                                "windSpeed": 7.85,
                                "windDirection": 42.73,
                                "pressureSeaLevel": 30.07,
                                "pressureSurfaceLevel": 29.99
                            }
                        },
                        {
                            "startTime": "2021-10-08T13:00:00Z",
                            "values": {
                                "temperature": 66.31,
                                "humidity": 85.54,
                                "windSpeed": 7.16,
                                "windDirection": 36.55,
                                "pressureSeaLevel": 30.08,
                                "pressureSurfaceLevel": 30
                            }
                        },
                        {
                            "startTime": "2021-10-08T14:00:00Z",
                            "values": {
                                "temperature": 65.82,
                                "humidity": 87.39,
                                "windSpeed": 6.58,
                                "windDirection": 34.54,
                                "pressureSeaLevel": 30.08,
                                "pressureSurfaceLevel": 30
                            }
                        },
                        {
                            "startTime": "2021-10-08T15:00:00Z",
                            "values": {
                                "temperature": 65.97,
                                "humidity": 87.11,
                                "windSpeed": 6.53,
                                "windDirection": 32.35,
                                "pressureSeaLevel": 30.08,
                                "pressureSurfaceLevel": 30
                            }
                        },
                        {
                            "startTime": "2021-10-08T16:00:00Z",
                            "values": {
                                "temperature": 65.46,
                                "humidity": 89.03,
                                "windSpeed": 6.46,
                                "windDirection": 27.57,
                                "pressureSeaLevel": 30.07,
                                "pressureSurfaceLevel": 29.99
                            }
                        },
                        {
                            "startTime": "2021-10-08T17:00:00Z",
                            "values": {
                                "temperature": 65.07,
                                "humidity": 90.59,
                                "windSpeed": 6.35,
                                "windDirection": 25.49,
                                "pressureSeaLevel": 30.06,
                                "pressureSurfaceLevel": 29.99
                            }
                        },
                        {
                            "startTime": "2021-10-08T18:00:00Z",
                            "values": {
                                "temperature": 64.58,
                                "humidity": 92.32,
                                "windSpeed": 5.93,
                                "windDirection": 24.62,
                                "pressureSeaLevel": 30.06,
                                "pressureSurfaceLevel": 29.98
                            }
                        },
                        {
                            "startTime": "2021-10-08T19:00:00Z",
                            "values": {
                                "temperature": 64.76,
                                "humidity": 92.42,
                                "windSpeed": 5.32,
                                "windDirection": 24.74,
                                "pressureSeaLevel": 30.05,
                                "pressureSurfaceLevel": 29.97
                            }
                        },
                        {
                            "startTime": "2021-10-08T20:00:00Z",
                            "values": {
                                "temperature": 65.57,
                                "humidity": 90.79,
                                "windSpeed": 4.94,
                                "windDirection": 22.48,
                                "pressureSeaLevel": 30.04,
                                "pressureSurfaceLevel": 29.97
                            }
                        },
                        {
                            "startTime": "2021-10-08T21:00:00Z",
                            "values": {
                                "temperature": 65.95,
                                "humidity": 90.36,
                                "windSpeed": 5.21,
                                "windDirection": 13.76,
                                "pressureSeaLevel": 30.05,
                                "pressureSurfaceLevel": 29.97
                            }
                        },
                        {
                            "startTime": "2021-10-08T22:00:00Z",
                            "values": {
                                "temperature": 65.82,
                                "humidity": 90.61,
                                "windSpeed": 5.21,
                                "windDirection": 13.03,
                                "pressureSeaLevel": 30.06,
                                "pressureSurfaceLevel": 29.99
                            }
                        },
                        {
                            "startTime": "2021-10-08T23:00:00Z",
                            "values": {
                                "temperature": 66.65,
                                "humidity": 89.56,
                                "windSpeed": 5.21,
                                "windDirection": 27.77,
                                "pressureSeaLevel": 30.07,
                                "pressureSurfaceLevel": 29.99
                            }
                        },
                        {
                            "startTime": "2021-10-09T00:00:00Z",
                            "values": {
                                "temperature": 68.65,
                                "humidity": 88.12,
                                "windSpeed": 5.23,
                                "windDirection": 33.89,
                                "pressureSeaLevel": 30.08,
                                "pressureSurfaceLevel": 30
                            }
                        },
                        {
                            "startTime": "2021-10-09T01:00:00Z",
                            "values": {
                                "temperature": 71.62,
                                "humidity": 84.94,
                                "windSpeed": 5.73,
                                "windDirection": 34.38,
                                "pressureSeaLevel": 30.08,
                                "pressureSurfaceLevel": 30.01
                            }
                        },
                        {
                            "startTime": "2021-10-09T02:00:00Z",
                            "values": {
                                "temperature": 74.91,
                                "humidity": 82.53,
                                "windSpeed": 5.82,
                                "windDirection": 45.98,
                                "pressureSeaLevel": 30.08,
                                "pressureSurfaceLevel": 30.01
                            }
                        },
                        {
                            "startTime": "2021-10-09T03:00:00Z",
                            "values": {
                                "temperature": 77.45,
                                "humidity": 76.71,
                                "windSpeed": 6.11,
                                "windDirection": 56.1,
                                "pressureSeaLevel": 30.07,
                                "pressureSurfaceLevel": 29.99
                            }
                        },
                        {
                            "startTime": "2021-10-09T04:00:00Z",
                            "values": {
                                "temperature": 79.25,
                                "humidity": 72.27,
                                "windSpeed": 6.08,
                                "windDirection": 58.02,
                                "pressureSeaLevel": 30.05,
                                "pressureSurfaceLevel": 29.97
                            }
                        },
                        {
                            "startTime": "2021-10-09T05:00:00Z",
                            "values": {
                                "temperature": 79.75,
                                "humidity": 70.3,
                                "windSpeed": 5.23,
                                "windDirection": 57.34,
                                "pressureSeaLevel": 30.02,
                                "pressureSurfaceLevel": 29.95
                            }
                        },
                        {
                            "startTime": "2021-10-09T06:00:00Z",
                            "values": {
                                "temperature": 80.29,
                                "humidity": 68.6,
                                "windSpeed": 4.54,
                                "windDirection": 38.56,
                                "pressureSeaLevel": 29.99,
                                "pressureSurfaceLevel": 29.92
                            }
                        },
                        {
                            "startTime": "2021-10-09T07:00:00Z",
                            "values": {
                                "temperature": 80.62,
                                "humidity": 68.82,
                                "windSpeed": 6.29,
                                "windDirection": 41.53,
                                "pressureSeaLevel": 29.99,
                                "pressureSurfaceLevel": 29.91
                            }
                        },
                        {
                            "startTime": "2021-10-09T08:00:00Z",
                            "values": {
                                "temperature": 79.68,
                                "humidity": 71.75,
                                "windSpeed": 6.51,
                                "windDirection": 37.82,
                                "pressureSeaLevel": 29.99,
                                "pressureSurfaceLevel": 29.92
                            }
                        },
                        {
                            "startTime": "2021-10-09T09:00:00Z",
                            "values": {
                                "temperature": 78.01,
                                "humidity": 76.35,
                                "windSpeed": 6.35,
                                "windDirection": 32.14,
                                "pressureSeaLevel": 29.99,
                                "pressureSurfaceLevel": 29.92
                            }
                        },
                        {
                            "startTime": "2021-10-09T10:00:00Z",
                            "values": {
                                "temperature": 75.83,
                                "humidity": 81.09,
                                "windSpeed": 5.35,
                                "windDirection": 37.68,
                                "pressureSeaLevel": 30,
                                "pressureSurfaceLevel": 29.93
                            }
                        },
                        {
                            "startTime": "2021-10-09T11:00:00Z",
                            "values": {
                                "temperature": 74.59,
                                "humidity": 85.51,
                                "windSpeed": 5.66,
                                "windDirection": 39.94,
                                "pressureSeaLevel": 30.03,
                                "pressureSurfaceLevel": 29.95
                            }
                        },
                        {
                            "startTime": "2021-10-09T12:00:00Z",
                            "values": {
                                "temperature": 74.05,
                                "humidity": 89.23,
                                "windSpeed": 6.02,
                                "windDirection": 42.11,
                                "pressureSeaLevel": 30.05,
                                "pressureSurfaceLevel": 29.97
                            }
                        },
                        {
                            "startTime": "2021-10-09T13:00:00Z",
                            "values": {
                                "temperature": 72.84,
                                "humidity": 94.81,
                                "windSpeed": 5.08,
                                "windDirection": 34.96,
                                "pressureSeaLevel": 30.05,
                                "pressureSurfaceLevel": 29.98
                            }
                        },
                        {
                            "startTime": "2021-10-09T14:00:00Z",
                            "values": {
                                "temperature": 72.37,
                                "humidity": 96.16,
                                "windSpeed": 5.28,
                                "windDirection": 31.61,
                                "pressureSeaLevel": 30.06,
                                "pressureSurfaceLevel": 29.98
                            }
                        },
                        {
                            "startTime": "2021-10-09T15:00:00Z",
                            "values": {
                                "temperature": 71.91,
                                "humidity": 97.01,
                                "windSpeed": 4.85,
                                "windDirection": 20.47,
                                "pressureSeaLevel": 30.06,
                                "pressureSurfaceLevel": 29.98
                            }
                        },
                        {
                            "startTime": "2021-10-09T16:00:00Z",
                            "values": {
                                "temperature": 71.6,
                                "humidity": 97.61,
                                "windSpeed": 4.34,
                                "windDirection": 13.85,
                                "pressureSeaLevel": 30.05,
                                "pressureSurfaceLevel": 29.97
                            }
                        },
                        {
                            "startTime": "2021-10-09T17:00:00Z",
                            "values": {
                                "temperature": 71.33,
                                "humidity": 98.14,
                                "windSpeed": 4.05,
                                "windDirection": 5.17,
                                "pressureSeaLevel": 30.04,
                                "pressureSurfaceLevel": 29.96
                            }
                        },
                        {
                            "startTime": "2021-10-09T18:00:00Z",
                            "values": {
                                "temperature": 71.02,
                                "humidity": 98.97,
                                "windSpeed": 4.56,
                                "windDirection": 344.36,
                                "pressureSeaLevel": 30.04,
                                "pressureSurfaceLevel": 29.96
                            }
                        },
                        {
                            "startTime": "2021-10-09T19:00:00Z",
                            "values": {
                                "temperature": 70.83,
                                "humidity": 98.75,
                                "windSpeed": 6.29,
                                "windDirection": 342.79,
                                "pressureSeaLevel": 30.03,
                                "pressureSurfaceLevel": 29.96
                            }
                        },
                        {
                            "startTime": "2021-10-09T20:00:00Z",
                            "values": {
                                "temperature": 70.61,
                                "humidity": 97.83,
                                "windSpeed": 7.11,
                                "windDirection": 347.24,
                                "pressureSeaLevel": 30.03,
                                "pressureSurfaceLevel": 29.95
                            }
                        },
                        {
                            "startTime": "2021-10-09T21:00:00Z",
                            "values": {
                                "temperature": 70.2,
                                "humidity": 97.54,
                                "windSpeed": 8.52,
                                "windDirection": 0.65,
                                "pressureSeaLevel": 30.04,
                                "pressureSurfaceLevel": 29.96
                            }
                        },
                        {
                            "startTime": "2021-10-09T22:00:00Z",
                            "values": {
                                "temperature": 70.02,
                                "humidity": 96.07,
                                "windSpeed": 7.52,
                                "windDirection": 7.01,
                                "pressureSeaLevel": 30.06,
                                "pressureSurfaceLevel": 29.98
                            }
                        },
                        {
                            "startTime": "2021-10-09T23:00:00Z",
                            "values": {
                                "temperature": 69.49,
                                "humidity": 94.62,
                                "windSpeed": 7.05,
                                "windDirection": 356.05,
                                "pressureSeaLevel": 30.08,
                                "pressureSurfaceLevel": 30.01
                            }
                        },
                        {
                            "startTime": "2021-10-10T00:00:00Z",
                            "values": {
                                "temperature": 69.91,
                                "humidity": 92.28,
                                "windSpeed": 8.19,
                                "windDirection": 358.03,
                                "pressureSeaLevel": 30.11,
                                "pressureSurfaceLevel": 30.03
                            }
                        },
                        {
                            "startTime": "2021-10-10T01:00:00Z",
                            "values": {
                                "temperature": 69.89,
                                "humidity": 92.52,
                                "windSpeed": 11.48,
                                "windDirection": 18.18,
                                "pressureSeaLevel": 30.12,
                                "pressureSurfaceLevel": 30.04
                            }
                        },
                        {
                            "startTime": "2021-10-10T02:00:00Z",
                            "values": {
                                "temperature": 70.09,
                                "humidity": 87.69,
                                "windSpeed": 12.71,
                                "windDirection": 26.03,
                                "pressureSeaLevel": 30.13,
                                "pressureSurfaceLevel": 30.05
                            }
                        },
                        {
                            "startTime": "2021-10-10T03:00:00Z",
                            "values": {
                                "temperature": 70.88,
                                "humidity": 79.63,
                                "windSpeed": 13.06,
                                "windDirection": 28.19,
                                "pressureSeaLevel": 30.12,
                                "pressureSurfaceLevel": 30.05
                            }
                        },
                        {
                            "startTime": "2021-10-10T04:00:00Z",
                            "values": {
                                "temperature": 73.26,
                                "humidity": 70.75,
                                "windSpeed": 13.67,
                                "windDirection": 32.59,
                                "pressureSeaLevel": 30.11,
                                "pressureSurfaceLevel": 30.04
                            }
                        },
                        {
                            "startTime": "2021-10-10T05:00:00Z",
                            "values": {
                                "temperature": 73.98,
                                "humidity": 67.99,
                                "windSpeed": 12.37,
                                "windDirection": 22.2,
                                "pressureSeaLevel": 30.1,
                                "pressureSurfaceLevel": 30.03
                            }
                        },
                        {
                            "startTime": "2021-10-10T06:00:00Z",
                            "values": {
                                "temperature": 72.9,
                                "humidity": 68.84,
                                "windSpeed": 12.44,
                                "windDirection": 14.26,
                                "pressureSeaLevel": 30.09,
                                "pressureSurfaceLevel": 30.01
                            }
                        },
                        {
                            "startTime": "2021-10-10T07:00:00Z",
                            "values": {
                                "temperature": 72.1,
                                "humidity": 67.03,
                                "windSpeed": 13.15,
                                "windDirection": 16.57,
                                "pressureSeaLevel": 30.09,
                                "pressureSurfaceLevel": 30.02
                            }
                        },
                        {
                            "startTime": "2021-10-10T08:00:00Z",
                            "values": {
                                "temperature": 69.46,
                                "humidity": 70.89,
                                "windSpeed": 13.27,
                                "windDirection": 17.91,
                                "pressureSeaLevel": 30.12,
                                "pressureSurfaceLevel": 30.04
                            }
                        },
                        {
                            "startTime": "2021-10-10T09:00:00Z",
                            "values": {
                                "temperature": 66.78,
                                "humidity": 75.92,
                                "windSpeed": 12.15,
                                "windDirection": 15.8,
                                "pressureSeaLevel": 30.15,
                                "pressureSurfaceLevel": 30.08
                            }
                        },
                        {
                            "startTime": "2021-10-10T10:00:00Z",
                            "values": {
                                "temperature": 65.17,
                                "humidity": 62.37,
                                "windSpeed": 15.19,
                                "windDirection": 19.16,
                                "pressureSeaLevel": 30.17,
                                "pressureSurfaceLevel": 30.1
                            }
                        },
                        {
                            "startTime": "2021-10-10T11:00:00Z",
                            "values": {
                                "temperature": 63.37,
                                "humidity": 56,
                                "windSpeed": 14.59,
                                "windDirection": 25.47,
                                "pressureSeaLevel": 30.2,
                                "pressureSurfaceLevel": 30.13
                            }
                        },
                        {
                            "startTime": "2021-10-10T12:00:00Z",
                            "values": {
                                "temperature": 63.39,
                                "humidity": 52.31,
                                "windSpeed": 13.22,
                                "windDirection": 22.64,
                                "pressureSeaLevel": 30.23,
                                "pressureSurfaceLevel": 30.15
                            }
                        },
                        {
                            "startTime": "2021-10-10T13:00:00Z",
                            "values": {
                                "temperature": 62.13,
                                "humidity": 57.05,
                                "windSpeed": 12.66,
                                "windDirection": 15.15,
                                "pressureSeaLevel": 30.24,
                                "pressureSurfaceLevel": 30.16
                            }
                        },
                        {
                            "startTime": "2021-10-10T14:00:00Z",
                            "values": {
                                "temperature": 61.61,
                                "humidity": 59.99,
                                "windSpeed": 12.17,
                                "windDirection": 16.14,
                                "pressureSeaLevel": 30.24,
                                "pressureSurfaceLevel": 30.17
                            }
                        },
                        {
                            "startTime": "2021-10-10T15:00:00Z",
                            "values": {
                                "temperature": 62.49,
                                "humidity": 56.1,
                                "windSpeed": 11.99,
                                "windDirection": 12.56,
                                "pressureSeaLevel": 30.24,
                                "pressureSurfaceLevel": 30.16
                            }
                        },
                        {
                            "startTime": "2021-10-10T16:00:00Z",
                            "values": {
                                "temperature": 61.79,
                                "humidity": 56.81,
                                "windSpeed": 13.4,
                                "windDirection": 9.68,
                                "pressureSeaLevel": 30.24,
                                "pressureSurfaceLevel": 30.16
                            }
                        },
                        {
                            "startTime": "2021-10-10T17:00:00Z",
                            "values": {
                                "temperature": 61.25,
                                "humidity": 53.73,
                                "windSpeed": 13.24,
                                "windDirection": 10.57,
                                "pressureSeaLevel": 30.24,
                                "pressureSurfaceLevel": 30.16
                            }
                        },
                        {
                            "startTime": "2021-10-10T18:00:00Z",
                            "values": {
                                "temperature": 61.05,
                                "humidity": 49.95,
                                "windSpeed": 13.11,
                                "windDirection": 10.24,
                                "pressureSeaLevel": 30.24,
                                "pressureSurfaceLevel": 30.17
                            }
                        },
                        {
                            "startTime": "2021-10-10T19:00:00Z",
                            "values": {
                                "temperature": 58.78,
                                "humidity": 59.37,
                                "windSpeed": 12.68,
                                "windDirection": 12.45,
                                "pressureSeaLevel": 30.24,
                                "pressureSurfaceLevel": 30.16
                            }
                        },
                        {
                            "startTime": "2021-10-10T20:00:00Z",
                            "values": {
                                "temperature": 56.64,
                                "humidity": 79.1,
                                "windSpeed": 10.92,
                                "windDirection": 21.72,
                                "pressureSeaLevel": 30.24,
                                "pressureSurfaceLevel": 30.16
                            }
                        },
                        {
                            "startTime": "2021-10-10T21:00:00Z",
                            "values": {
                                "temperature": 56.71,
                                "humidity": 81.14,
                                "windSpeed": 8.7,
                                "windDirection": 25.75,
                                "pressureSeaLevel": 30.25,
                                "pressureSurfaceLevel": 30.17
                            }
                        },
                        {
                            "startTime": "2021-10-10T22:00:00Z",
                            "values": {
                                "temperature": 57.97,
                                "humidity": 73.54,
                                "windSpeed": 7.43,
                                "windDirection": 25.94,
                                "pressureSeaLevel": 30.26,
                                "pressureSurfaceLevel": 30.19
                            }
                        },
                        {
                            "startTime": "2021-10-10T23:00:00Z",
                            "values": {
                                "temperature": 58.87,
                                "humidity": 68.34,
                                "windSpeed": 7.09,
                                "windDirection": 19.28,
                                "pressureSeaLevel": 30.27,
                                "pressureSurfaceLevel": 30.19
                            }
                        },
                        {
                            "startTime": "2021-10-11T00:00:00Z",
                            "values": {
                                "temperature": 59.94,
                                "humidity": 63.01,
                                "windSpeed": 9.17,
                                "windDirection": 18.28,
                                "pressureSeaLevel": 30.28,
                                "pressureSurfaceLevel": 30.21
                            }
                        },
                        {
                            "startTime": "2021-10-11T01:00:00Z",
                            "values": {
                                "temperature": 61.38,
                                "humidity": 56.82,
                                "windSpeed": 10.42,
                                "windDirection": 21.63,
                                "pressureSeaLevel": 30.29,
                                "pressureSurfaceLevel": 30.21
                            }
                        },
                        {
                            "startTime": "2021-10-11T02:00:00Z",
                            "values": {
                                "temperature": 61.99,
                                "humidity": 54.39,
                                "windSpeed": 10.69,
                                "windDirection": 24.36,
                                "pressureSeaLevel": 30.29,
                                "pressureSurfaceLevel": 30.21
                            }
                        },
                        {
                            "startTime": "2021-10-11T03:00:00Z",
                            "values": {
                                "temperature": 63.41,
                                "humidity": 49.44,
                                "windSpeed": 11.79,
                                "windDirection": 28.06,
                                "pressureSeaLevel": 30.27,
                                "pressureSurfaceLevel": 30.19
                            }
                        },
                        {
                            "startTime": "2021-10-11T04:00:00Z",
                            "values": {
                                "temperature": 64.53,
                                "humidity": 48.14,
                                "windSpeed": 12.12,
                                "windDirection": 28.14,
                                "pressureSeaLevel": 30.25,
                                "pressureSurfaceLevel": 30.17
                            }
                        },
                        {
                            "startTime": "2021-10-11T05:00:00Z",
                            "values": {
                                "temperature": 65.12,
                                "humidity": 48.91,
                                "windSpeed": 12.28,
                                "windDirection": 27.49,
                                "pressureSeaLevel": 30.22,
                                "pressureSurfaceLevel": 30.14
                            }
                        },
                        {
                            "startTime": "2021-10-11T06:00:00Z",
                            "values": {
                                "temperature": 64.89,
                                "humidity": 51.48,
                                "windSpeed": 11.05,
                                "windDirection": 27.21,
                                "pressureSeaLevel": 30.21,
                                "pressureSurfaceLevel": 30.13
                            }
                        },
                        {
                            "startTime": "2021-10-11T07:00:00Z",
                            "values": {
                                "temperature": 65.43,
                                "humidity": 49.71,
                                "windSpeed": 11.36,
                                "windDirection": 31.87,
                                "pressureSeaLevel": 30.2,
                                "pressureSurfaceLevel": 30.12
                            }
                        },
                        {
                            "startTime": "2021-10-11T08:00:00Z",
                            "values": {
                                "temperature": 64.83,
                                "humidity": 52.01,
                                "windSpeed": 10.89,
                                "windDirection": 35.63,
                                "pressureSeaLevel": 30.21,
                                "pressureSurfaceLevel": 30.12
                            }
                        },
                        {
                            "startTime": "2021-10-11T09:00:00Z",
                            "values": {
                                "temperature": 62.67,
                                "humidity": 56.47,
                                "windSpeed": 9.69,
                                "windDirection": 35.89,
                                "pressureSeaLevel": 30.21,
                                "pressureSurfaceLevel": 30.12
                            }
                        },
                        {
                            "startTime": "2021-10-11T10:00:00Z",
                            "values": {
                                "temperature": 60.04,
                                "humidity": 59.9,
                                "windSpeed": 7.45,
                                "windDirection": 35.76,
                                "pressureSeaLevel": 30.21,
                                "pressureSurfaceLevel": 30.13
                            }
                        },
                        {
                            "startTime": "2021-10-11T11:00:00Z",
                            "values": {
                                "temperature": 59.07,
                                "humidity": 61.28,
                                "windSpeed": 6.42,
                                "windDirection": 34.87,
                                "pressureSeaLevel": 30.22,
                                "pressureSurfaceLevel": 30.14
                            }
                        },
                        {
                            "startTime": "2021-10-11T12:00:00Z",
                            "values": {
                                "temperature": 58.23,
                                "humidity": 62.54,
                                "windSpeed": 6.02,
                                "windDirection": 26.45,
                                "pressureSeaLevel": 30.22,
                                "pressureSurfaceLevel": 30.14
                            }
                        },
                        {
                            "startTime": "2021-10-11T13:00:00Z",
                            "values": {
                                "temperature": 57.65,
                                "humidity": 63.37,
                                "windSpeed": 5.75,
                                "windDirection": 17.05,
                                "pressureSeaLevel": 30.23,
                                "pressureSurfaceLevel": 30.14
                            }
                        },
                        {
                            "startTime": "2021-10-11T14:00:00Z",
                            "values": {
                                "temperature": 57.16,
                                "humidity": 65.15,
                                "windSpeed": 6.76,
                                "windDirection": 13.4,
                                "pressureSeaLevel": 30.23,
                                "pressureSurfaceLevel": 30.14
                            }
                        },
                        {
                            "startTime": "2021-10-11T15:00:00Z",
                            "values": {
                                "temperature": 56.12,
                                "humidity": 69.84,
                                "windSpeed": 7.67,
                                "windDirection": 7,
                                "pressureSeaLevel": 30.23,
                                "pressureSurfaceLevel": 30.14
                            }
                        },
                        {
                            "startTime": "2021-10-11T16:00:00Z",
                            "values": {
                                "temperature": 55.62,
                                "humidity": 69.29,
                                "windSpeed": 9.13,
                                "windDirection": 15.15,
                                "pressureSeaLevel": 30.22,
                                "pressureSurfaceLevel": 30.14
                            }
                        },
                        {
                            "startTime": "2021-10-11T17:00:00Z",
                            "values": {
                                "temperature": 54.81,
                                "humidity": 67.32,
                                "windSpeed": 9.31,
                                "windDirection": 20.59,
                                "pressureSeaLevel": 30.22,
                                "pressureSurfaceLevel": 30.13
                            }
                        },
                        {
                            "startTime": "2021-10-11T18:00:00Z",
                            "values": {
                                "temperature": 54.03,
                                "humidity": 67.57,
                                "windSpeed": 8.95,
                                "windDirection": 16.7,
                                "pressureSeaLevel": 30.21,
                                "pressureSurfaceLevel": 30.13
                            }
                        },
                        {
                            "startTime": "2021-10-11T19:00:00Z",
                            "values": {
                                "temperature": 53.31,
                                "humidity": 68.17,
                                "windSpeed": 9.19,
                                "windDirection": 13.44,
                                "pressureSeaLevel": 30.21,
                                "pressureSurfaceLevel": 30.12
                            }
                        },
                        {
                            "startTime": "2021-10-11T20:00:00Z",
                            "values": {
                                "temperature": 52.79,
                                "humidity": 68.46,
                                "windSpeed": 9.8,
                                "windDirection": 13.04,
                                "pressureSeaLevel": 30.21,
                                "pressureSurfaceLevel": 30.12
                            }
                        },
                        {
                            "startTime": "2021-10-11T21:00:00Z",
                            "values": {
                                "temperature": 52.47,
                                "humidity": 68.53,
                                "windSpeed": 10.87,
                                "windDirection": 15.17,
                                "pressureSeaLevel": 30.21,
                                "pressureSurfaceLevel": 30.12
                            }
                        },
                        {
                            "startTime": "2021-10-11T22:00:00Z",
                            "values": {
                                "temperature": 52.11,
                                "humidity": 69.51,
                                "windSpeed": 10.63,
                                "windDirection": 19.19,
                                "pressureSeaLevel": 30.22,
                                "pressureSurfaceLevel": 30.13
                            }
                        },
                        {
                            "startTime": "2021-10-11T23:00:00Z",
                            "values": {
                                "temperature": 52.61,
                                "humidity": 70.81,
                                "windSpeed": 10.72,
                                "windDirection": 22.05,
                                "pressureSeaLevel": 30.23,
                                "pressureSurfaceLevel": 30.15
                            }
                        },
                        {
                            "startTime": "2021-10-12T00:00:00Z",
                            "values": {
                                "temperature": 55.83,
                                "humidity": 64.35,
                                "windSpeed": 12.46,
                                "windDirection": 28.17,
                                "pressureSeaLevel": 30.24,
                                "pressureSurfaceLevel": 30.16
                            }
                        },
                        {
                            "startTime": "2021-10-12T01:00:00Z",
                            "values": {
                                "temperature": 59.31,
                                "humidity": 56.81,
                                "windSpeed": 13.62,
                                "windDirection": 33.79,
                                "pressureSeaLevel": 30.24,
                                "pressureSurfaceLevel": 30.16
                            }
                        },
                        {
                            "startTime": "2021-10-12T02:00:00Z",
                            "values": {
                                "temperature": 62.19,
                                "humidity": 50.84,
                                "windSpeed": 13.96,
                                "windDirection": 33.49,
                                "pressureSeaLevel": 30.23,
                                "pressureSurfaceLevel": 30.15
                            }
                        },
                        {
                            "startTime": "2021-10-12T03:00:00Z",
                            "values": {
                                "temperature": 64.35,
                                "humidity": 46.41,
                                "windSpeed": 13.78,
                                "windDirection": 31.39,
                                "pressureSeaLevel": 30.22,
                                "pressureSurfaceLevel": 30.14
                            }
                        },
                        {
                            "startTime": "2021-10-12T04:00:00Z",
                            "values": {
                                "temperature": 65.97,
                                "humidity": 43.91,
                                "windSpeed": 13.56,
                                "windDirection": 31.82,
                                "pressureSeaLevel": 30.2,
                                "pressureSurfaceLevel": 30.11
                            }
                        },
                        {
                            "startTime": "2021-10-12T05:00:00Z",
                            "values": {
                                "temperature": 67.05,
                                "humidity": 42.62,
                                "windSpeed": 13.58,
                                "windDirection": 30.39,
                                "pressureSeaLevel": 30.17,
                                "pressureSurfaceLevel": 30.09
                            }
                        },
                        {
                            "startTime": "2021-10-12T06:00:00Z",
                            "values": {
                                "temperature": 67.89,
                                "humidity": 42.09,
                                "windSpeed": 12.95,
                                "windDirection": 30.56,
                                "pressureSeaLevel": 30.16,
                                "pressureSurfaceLevel": 30.07
                            }
                        },
                        {
                            "startTime": "2021-10-12T07:00:00Z",
                            "values": {
                                "temperature": 68.02,
                                "humidity": 42.64,
                                "windSpeed": 12.97,
                                "windDirection": 34.4,
                                "pressureSeaLevel": 30.15,
                                "pressureSurfaceLevel": 30.07
                            }
                        },
                        {
                            "startTime": "2021-10-12T08:00:00Z",
                            "values": {
                                "temperature": 67.33,
                                "humidity": 46.9,
                                "windSpeed": 11.5,
                                "windDirection": 37.58,
                                "pressureSeaLevel": 30.15,
                                "pressureSurfaceLevel": 30.07
                            }
                        },
                        {
                            "startTime": "2021-10-12T09:00:00Z",
                            "values": {
                                "temperature": 64.4,
                                "humidity": 53.79,
                                "windSpeed": 9.51,
                                "windDirection": 39.96,
                                "pressureSeaLevel": 30.15,
                                "pressureSurfaceLevel": 30.07
                            }
                        },
                        {
                            "startTime": "2021-10-12T10:00:00Z",
                            "values": {
                                "temperature": 60.75,
                                "humidity": 60.79,
                                "windSpeed": 7.36,
                                "windDirection": 47.59,
                                "pressureSeaLevel": 30.16,
                                "pressureSurfaceLevel": 30.08
                            }
                        },
                        {
                            "startTime": "2021-10-12T11:00:00Z",
                            "values": {
                                "temperature": 58.98,
                                "humidity": 64.07,
                                "windSpeed": 6.87,
                                "windDirection": 56.07,
                                "pressureSeaLevel": 30.17,
                                "pressureSurfaceLevel": 30.09
                            }
                        },
                        {
                            "startTime": "2021-10-12T12:00:00Z",
                            "values": {
                                "temperature": 57.96,
                                "humidity": 64.91,
                                "windSpeed": 6.76,
                                "windDirection": 39.28,
                                "pressureSeaLevel": 30.17,
                                "pressureSurfaceLevel": 30.09
                            }
                        },
                        {
                            "startTime": "2021-10-12T13:00:00Z",
                            "values": {
                                "temperature": 57.24,
                                "humidity": 65.17,
                                "windSpeed": 7.09,
                                "windDirection": 26.63,
                                "pressureSeaLevel": 30.17,
                                "pressureSurfaceLevel": 30.09
                            }
                        },
                        {
                            "startTime": "2021-10-12T14:00:00Z",
                            "values": {
                                "temperature": 56.57,
                                "humidity": 65.34,
                                "windSpeed": 7.27,
                                "windDirection": 18.55,
                                "pressureSeaLevel": 30.18,
                                "pressureSurfaceLevel": 30.09
                            }
                        },
                        {
                            "startTime": "2021-10-12T15:00:00Z",
                            "values": {
                                "temperature": 56.03,
                                "humidity": 67.37,
                                "windSpeed": 8.08,
                                "windDirection": 5.62,
                                "pressureSeaLevel": 30.17,
                                "pressureSurfaceLevel": 30.09
                            }
                        }
                    ]
                }
            ]
        }
    }

    const response1 = await fetch(url1, options)
        .then(result => result.json())
        .catch(error => console.log('ERROR'))

    const response2 = await fetch(url2, options)
        .then(result => result.json())
        .catch(error => console.log('ERROR'))


    if (response2.hasOwnProperty('code')) {
        let combinedData = { 'daily': response1, 'hourly': response2 }
        res.send(combinedData)
    }

    else {

        let hourlyData = {
            "type": "Feature",
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -0.1257,
                    51.5085,
                    25
                ]
            },
            "properties":
            {
                "timeseries": response2["data"]["timelines"][0]["intervals"]
                //"timeseries": b["data"]["timelines"][0]["intervals"]
            }
        }

        //let combinedData = {'daily' : a, 'hourly' : hourlyData}
        let combinedData = { 'daily': response1, 'hourly': hourlyData }
        res.send(combinedData)
    }
});




// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

// app.use('/*', (req, res) => {
// 	res.sendFile(path.join(__dirname+'/dist/weather-app-angular/index.html'));
// })

export default app