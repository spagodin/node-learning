const http = require('http');
const config = require('../config/config.json');
const url = 'http://api.openweathermap.org/data/2.5/weather';

const print = (body) => {
    console.log(`The temperature in ${body.name} is ${body.main.temp}.`);
}

exports.get = location => {
    http.get(`${url}?q=${location}&APPID=${config.openWeatherApiAppId}`, (res) => {
        res.setEncoding('utf8');
        let rawData = '';

        res.on('data', (stream) => { rawData += stream; });

        res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            print(parsedData);
        } catch (e) {
            console.error(e.message);
        }
        });
    }).on('error', (e) => {
        console.error(`Got this error: ${e.message}`);
    });
};


