
Learning Notes: Making my first http request using Node.js

To make an http get request: http.get(options[,callback])

1. Require ('http') and assign to a variable (e.g. const http = require('http')
    'http' is a built-in package as part of node
2. Declare any const variables that can be used in the construction of the options parameter
3. Make the http request:

PATTERN:

```
http.get(url, (response) => {
    response.setEncoding('utf8');

    let body = " ";
    response.on('data', chunk => {
        body += chunk;
    })
    response.on('end', () => {
        const parsedData = JSON.parse(body);
        console.log(parsedData)
        
    })
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);

```

- The `get` method returns an Http.ClientRequest _object(?)_ and is passed by default to the callback function (see `response` parameter above)

- By default the stream (response) is returned as a `buffer`. Ideally we should set an encoding so that the stream data is returned as a string of a specific encoding.
    - This is accomplished in the above pattern using `readable.setEncoding('encoding') stream _method(?)_

- The events that we 'listen for' (e.g. response.on('_event_')) include:
    - 'data' event (stream event) passes passes the `chunk` of data as a string if a default encoding is set
        - The callback function here typically assembles the chunk/string as one full string.
    - 'end' event (stream event) which is emitted when there is no more data to be consumed from the stream.
        - The callback function used in the pattern above parses the body (string) to a JSON object.

- Lastly, we can attach a listener on the `http.get(...)` method which listens for 'error' emitted by the instance of the `http.ClientRequest` class. The error in the pattern above is thrown when