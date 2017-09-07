
const getWeather = require('./utilities/getWeather.js');

const locations = process.argv.slice(2);
locations.forEach(getWeather.get);

