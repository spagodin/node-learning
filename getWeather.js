const http = require('http');
const config = require('./config.json');
const url = 'http://api.openweathermap.org/data/2.5/weather';


exports.get = location => {
    http.get(`${url}?q=${location}&APPID=${config.openWeatherApiAppId}`, (res) => {
        res.setEncoding('utf8');
        let rawData = '';

        res.on('data', (stream) => { rawData += stream; });

        res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData.main.temp);
        } catch (e) {
            console.error(e.message);
        }
        });
    }).on('error', (e) => {
        console.error(`Got this error: ${e.message}`);
    });
};


