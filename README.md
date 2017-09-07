This repository is currently being used to experiment with basic functionality of node.js and to improve my knowledge of server-side JavaScript. I am using the `OpenWeatherMap API` for learning purposes. 

If you are perusing this repository and would like to configure the application to run, you'll need to manually add a `config.json` file to the `config` folder in your local project folder.

The `config.json` file should follow the following structure:

```
{
    "openWeatherApiAppId": "<YOUR_API_KEY_HERE>"
} 

```

Currently you can execute the command line application with the following command:

`node app.js "<city> <stateAbbr>"`

For multiple locations, you can pass multiple arguments in the command line with each city/state argument separated by a space. Such as:

`node app.js "knoxville tn" "new york ny"`

Please feel free to comment, and or suggest opportunities to improve by creating or contributing to this repository's issues.